import { useEffect, useState } from "react";
import ScoreBoardUI from "./ScoreBoard.presenter";
import { ScoreBoardProps } from "./ScoreBoard.types";
import { DiceValue } from "../dice/dice.styles";
import { useRecoilState } from "recoil";
import { selectScore1p, selectScore2p, totalScore1p, totalScore2p, turnState, isGameEnd } from "@/commons/state/atoms";

export default function ScoreBoard (props: ScoreBoardProps): JSX.Element {
    const initialArray: boolean[] = Array.from({ length: 12 }, () => false);
    const [fixScore, setFixScore] = useState<boolean[]>(initialArray);
    const [aces, setAces] = useState<number>(0);
    const [deuces, setDeuces] = useState<number>(0);
    const [threes, setThrees] = useState<number>(0);
    const [fours, setFours] = useState<number>(0);
    const [fives, setFives] = useState<number>(0);
    const [sixes, setSixes] = useState<number>(0);
    const [subtotal, setSubtotal] = useState<number>(0);
    const [choice, setChoice] = useState<number>(0);
    const [fourOfAKind, setFourOfAKind] = useState<number>(0);
    const [fullHouse, setFullHouse] = useState<number>(0);
    const [smallStraight, setSmallStraight] = useState<number>(0);
    const [largeStraight, setLargeStraight] = useState<number>(0);
    const [yacht, setYacht] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);

    const [select1p, isSelectScore1p] = useRecoilState(selectScore1p);
    const [select2p, isSelectScore2p] = useRecoilState(selectScore2p);
    const [turn, setTurn] = useRecoilState(turnState);
    const [total1p, setTotal1p] = useRecoilState(totalScore1p);
    const [total2p, setTotal2p] = useRecoilState(totalScore2p);
    const [isEnd, setIsEnd] = useRecoilState<boolean>(isGameEnd);

    useEffect(()=>{
        calculateSubTotal();
    },[aces,deuces,threes,fours,fives,sixes,choice,fourOfAKind,fullHouse,smallStraight,largeStraight,yacht]);

    useEffect(()=>{
        calculateSubTotal();
        if(props.player === "2p"){
            if (!fixScore.includes(false)) {
                setIsEnd(true);
            }
            else {
                setIsEnd(false);
            }
        }
    },[fixScore]);

    useEffect(()=>{
        calculateTotal();
    },[subtotal, choice, fourOfAKind, fullHouse, smallStraight, largeStraight, yacht]);

    const countOccurrences = (diceValues: number[],value: number): number => {
        return diceValues.filter((diceValue) => diceValue === value).length;
    };

    const onHoverAces = () => {
        if(fixScore[0] || turn !== props.player) return;
        setAces(countOccurrences(props.diceValues, 1) * 1);
    };

    const onLeaveAces = () => {
        if(fixScore[0]) return;
        setAces(0);
    };

    const onClickAces = () => {
        if(fixScore[0] || turn !== props.player) return;
        setAces(countOccurrences(props.diceValues, 1) * 1);
        setFixScore(prevArray => {
            const nextArray = [...prevArray];
            nextArray[0] = true;
            return nextArray;
        });
        if(turn === "1p"){
            isSelectScore1p(true);
        }
        else if(turn === "2p"){
            isSelectScore2p(true);
        }
    };

    const onHoverDeuces = () => {
        if(fixScore[1] || turn !== props.player) return;
        setDeuces(countOccurrences(props.diceValues, 2) * 2);
    };

    const onLeaveDeuces = () => {
        if(fixScore[1]) return;
        setDeuces(0);
    };

    const onClickDeuces = () => {
        if(fixScore[1] || turn !== props.player) return;
        setDeuces(countOccurrences(props.diceValues, 2) * 2);
        setFixScore(prevArray => {
            const nextArray = [...prevArray];
            nextArray[1] = true;
            return nextArray;
        });
        if(turn === "1p"){
            isSelectScore1p(true);
        }
        else if(turn === "2p"){
            isSelectScore2p(true);
        }
    };

    const onHoverThrees = () => {
        if(fixScore[2] || turn !== props.player) return;
        setThrees(countOccurrences(props.diceValues, 3) * 3);
    };

    const onLeaveThrees = () => {
        if(fixScore[2]) return;
        setThrees(0);
    };

    const onClickThrees = () => {
        if(fixScore[2] || turn !== props.player) return;
        setThrees(countOccurrences(props.diceValues, 3) * 3);
        setFixScore(prevArray => {
            const nextArray = [...prevArray];
            nextArray[2] = true;
            return nextArray;
        });
        if(turn === "1p"){
            isSelectScore1p(true);
        }
        else if(turn === "2p"){
            isSelectScore2p(true);
        }
    };

    const onHoverFours = () => {
        if(fixScore[3] || turn !== props.player) return;
        setFours(countOccurrences(props.diceValues, 4) * 4);
    };

    const onLeaveFours = () => {
        if(fixScore[3]) return;
        setFours(0);
    };

    const onClickFours = () => {
        if(fixScore[3] || turn !== props.player) return;
        setFours(countOccurrences(props.diceValues, 4) * 4);
        setFixScore(prevArray => {
            const nextArray = [...prevArray];
            nextArray[3] = true;
            return nextArray;
        });
        if(turn === "1p"){
            isSelectScore1p(true);
        }
        else if(turn === "2p"){
            isSelectScore2p(true);
        }
    };

    const onHoverFives = () => {
        if(fixScore[4] || turn !== props.player) return;
        setFives(countOccurrences(props.diceValues, 5) * 5);
    };

    const onLeaveFives = () => {
        if(fixScore[4]) return;
        setFives(0);
    }

    const onClickFives = () => {
        if(fixScore[4] || turn !== props.player) return;
        setFives(countOccurrences(props.diceValues, 5) * 5);
        setFixScore(prevArray => {
            const nextArray = [...prevArray];
            nextArray[4] = true;
            return nextArray;
        });
        if(turn === "1p"){
            isSelectScore1p(true);
        }
        else if(turn === "2p"){
            isSelectScore2p(true);
        }
    };

    const onHoverSixes = () => {
        if(fixScore[5] || turn !== props.player) return;
        return setSixes(countOccurrences(props.diceValues, 6) * 6);
    };

    const onLeaveSixes = () => {
        if(fixScore[5]) return;
        setSixes(0);
    }

    const onClickSixes = () => {
        if(fixScore[5] || turn !== props.player) return;
        setSixes(countOccurrences(props.diceValues, 6) * 6);
        setFixScore(prevArray => {
            const nextArray = [...prevArray];
            nextArray[5] = true;
            return nextArray;
        });
        if(turn === "1p"){
            isSelectScore1p(true);
        }
        else if(turn === "2p"){
            isSelectScore2p(true);
        }
    };

    const calculateSubTotal = (): void => {
        let subTotalSum = aces + deuces + threes + fours + fives + sixes;
        setSubtotal((subTotalSum) >= 63 ? subTotalSum + 35 : subTotalSum);
    };

    const onHoverChoice = () => {
        if(fixScore[6] || turn !== props.player) return;
        const sum = props.diceValues.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
          }, 0);
        setChoice(sum);
    };

    const onLeaveChoice = () => {
        if(fixScore[6]) return;
        setChoice(0);
    };

    const onClickChoice = () => {
        if(fixScore[6] || turn !== props.player) return;
        const sum = props.diceValues.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
          }, 0);
        setChoice(sum);
        setFixScore(prevArray => {
            const nextArray = [...prevArray];
            nextArray[6] = true;
            return nextArray;
        });
        if(turn === "1p"){
            isSelectScore1p(true);
        }
        else if(turn === "2p"){
            isSelectScore2p(true);
        }
    };
        

    const onHoverFourOfAKind = () => {
        if(fixScore[7] || turn !== props.player) return;
        setFourOfAKind(props.diceValues.some((value) => countOccurrences(props.diceValues,value) >= 4)
            ? props.diceValues.reduce((acc, cur) => acc + cur, 0) : 0);
    };

    const onLeaveFourOfAKind = () => {
        if(fixScore[7]) return;
        setFourOfAKind(0);
    };

    const onClickFourOfAKind = () => {
        if(fixScore[7] || turn !== props.player) return;
        setFourOfAKind(props.diceValues.some((value) => countOccurrences(props.diceValues,value) >= 4)
            ? props.diceValues.reduce((acc, cur) => acc + cur, 0) : 0);
        setFixScore(prevArray => {
            const nextArray = [...prevArray];
            nextArray[7] = true;
            return nextArray;
        });
        if(turn === "1p"){
            isSelectScore1p(true);
        }
        else if(turn === "2p"){
            isSelectScore2p(true);
        }
    };


    const onHoverFullHouse = () => {
        if(fixScore[8] || turn !== props.player) return;
        setFullHouse((props.diceValues.some((value) => countOccurrences(props.diceValues, value) === 3) &&
            props.diceValues.some((value) => countOccurrences(props.diceValues, value) === 2))
            ? 25 : 0);
    };

    const onLeaveFullHouse = () => {
        if(fixScore[8]) return;
        setFullHouse(0);
    };

    const onClickFullHouse = () => {
        if(fixScore[8] || turn !== props.player) return;
        setFullHouse((props.diceValues.some((value) => countOccurrences(props.diceValues, value) === 3) &&
            props.diceValues.some((value) => countOccurrences(props.diceValues, value) === 2))
            ? 25 : 0);
        setFixScore(prevArray => {
            const nextArray = [...prevArray];
            nextArray[8] = true;
            return nextArray;
        });
        if(turn === "1p"){
            isSelectScore1p(true);
        }
        else if(turn === "2p"){
            isSelectScore2p(true);
        }
    };

    const onHoverSmallStraight = () => {
        if(fixScore[9] || turn !== props.player) return;
        setSmallStraight((props.diceValues.includes(1) && props.diceValues.includes(2) && props.diceValues.includes(3) && props.diceValues.includes(4)) ||
            (props.diceValues.includes(2) && props.diceValues.includes(3) && props.diceValues.includes(4) && props.diceValues.includes(5)) ||
            (props.diceValues.includes(3) && props.diceValues.includes(4) && props.diceValues.includes(5) && props.diceValues.includes(6))
            ? 30: 0);
    };

    const onLeaveSmallStraight = () => {
        if(fixScore[9]) return;
        setSmallStraight(0);
    };

    const onClickSmallStraight = () => {
        if(fixScore[9] || turn !== props.player) return;
        setSmallStraight((props.diceValues.includes(1) && props.diceValues.includes(2) && props.diceValues.includes(3) && props.diceValues.includes(4)) ||
            (props.diceValues.includes(2) && props.diceValues.includes(3) && props.diceValues.includes(4) && props.diceValues.includes(5)) ||
            (props.diceValues.includes(3) && props.diceValues.includes(4) && props.diceValues.includes(5) && props.diceValues.includes(6))
            ? 30: 0);
        setFixScore(prevArray => {
            const nextArray = [...prevArray];
            nextArray[9] = true;
            return nextArray;
        });
        if(turn === "1p"){
            isSelectScore1p(true);
        }
        else if(turn === "2p"){
            isSelectScore2p(true);
        }
    };

    const onHoverLargeStraight = () => {
        if(fixScore[10] || turn !== props.player) return;
        setLargeStraight((props.diceValues.includes(1) && props.diceValues.includes(2) && props.diceValues.includes(3) &&
            props.diceValues.includes(4) && props.diceValues.includes(5)) ||
            (props.diceValues.includes(2) && props.diceValues.includes(3) && props.diceValues.includes(4) &&
            props.diceValues.includes(5) && props.diceValues.includes(6))
            ? 40 : 0);
    };

    const onLeaveLargeStraight = () => {
        if(fixScore[10]) return;
        setLargeStraight(0);
    };

    const onClickLargeStraight = () => {
        if(fixScore[10] || turn !== props.player) return;
        setLargeStraight((props.diceValues.includes(1) && props.diceValues.includes(2) && props.diceValues.includes(3) &&
            props.diceValues.includes(4) && props.diceValues.includes(5)) ||
            (props.diceValues.includes(2) && props.diceValues.includes(3) && props.diceValues.includes(4) &&
            props.diceValues.includes(5) && props.diceValues.includes(6))
            ? 40 : 0);
        setFixScore(prevArray => {
            const nextArray = [...prevArray];
            nextArray[10] = true;
            return nextArray;
        });
        if(turn === "1p"){
            isSelectScore1p(true);
        }
        else if(turn === "2p"){
            isSelectScore2p(true);
        }
    };

    const onHoverYacht = () => {
        if(fixScore[11] || turn !== props.player) return;
        setYacht(props.diceValues.every((value) => value === props.diceValues[0]) ? 50 : 0);
    };

    const onLeaveYacht = () => {
        if(fixScore[11]) return;
        setYacht(0);
    };

    const onClickYacht = () => {
        if(fixScore[11] || turn !== props.player) return;
        setYacht(props.diceValues.every((value) => value === props.diceValues[0]) ? 50 : 0);
        setFixScore(prevArray => {
            const nextArray = [...prevArray];
            nextArray[11] = true;
            return nextArray;
        });
        if(turn === "1p"){
            isSelectScore1p(true);
        }
        else if(turn === "2p"){
            isSelectScore2p(true);
        }
    };

    const calculateTotal = () => {
        const total = subtotal + choice + fourOfAKind + fullHouse + smallStraight + largeStraight + yacht;
        if(props.player === "1p"){
            setTotal1p(total);
        }
        else if (props.player === "2p"){
            setTotal2p(total);
        }
        return setTotal(total);
    };

    return (
        <>
            <ScoreBoardUI
                diceValues={props.diceValues}
                isMyTurn={props.isMyTurn}
                fixScore={fixScore}
                aces = {aces}
                deuces = {deuces}
                threes = {threes}
                fours = {fours}
                fives = {fives}
                sixes = {sixes}
                subtotal = {subtotal}
                choice = {choice}
                fourOfAKind = {fourOfAKind}
                fullHouse = {fullHouse}
                smallStraight = {smallStraight}
                largeStraight = {largeStraight}
                yacht = {yacht}
                total = {total}
                onHoverAces = {onHoverAces}
                onHoverDeuces = {onHoverDeuces}
                onHoverThrees = {onHoverThrees}
                onHoverFours = {onHoverFours}
                onHoverFives = {onHoverFives}
                onHoverSixes = {onHoverSixes}
                onHoverChoice = {onHoverChoice}
                onHoverFourOfAKind = {onHoverFourOfAKind}
                onHoverFullHouse = {onHoverFullHouse}
                onHoverSmallStraight = {onHoverSmallStraight}
                onHoverLargeStraight = {onHoverLargeStraight}
                onHoverYacht = {onHoverYacht}
                onLeaveAces = {onLeaveAces}
                onLeaveDeuces = {onLeaveDeuces}
                onLeaveThrees = {onLeaveThrees}
                onLeaveFours = {onLeaveFours}
                onLeaveFives = {onLeaveFives}
                onLeaveSixes = {onLeaveSixes}
                onLeaveChoice = {onLeaveChoice}
                onLeaveFourOfAKind = {onLeaveFourOfAKind}
                onLeaveFullHouse = {onLeaveFullHouse}
                onLeaveSmallStraight = {onLeaveSmallStraight}
                onLeaveLargeStraight = {onLeaveLargeStraight}
                onLeaveYacht = {onLeaveYacht}
                onClickAces = {onClickAces}
                onClickDeuces = {onClickDeuces}
                onClickThrees = {onClickThrees}
                onClickFours = {onClickFours}
                onClickFives = {onClickFives}
                onClickSixes = {onClickSixes}
                onClickChoice = {onClickChoice}
                onClickFourOfAKind = {onClickFourOfAKind}
                onClickFullHouse = {onClickFullHouse}
                onClickSmallStraight = {onClickSmallStraight}
                onClickLargeStraight = {onClickLargeStraight}
                onClickYacht = {onClickYacht}
            />
        </>
    );
}