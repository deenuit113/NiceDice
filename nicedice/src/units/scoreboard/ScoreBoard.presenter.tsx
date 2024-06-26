import * as S from "./ScoreBoard.styles";
import { ScoreBoardUIProps } from "./ScoreBoard.types";

export default function ScoreBoardUI (props: ScoreBoardUIProps): JSX.Element {
    return (
        <>
            <S.PlayerBoard>
                <S.BasicScoreBoard>
                    <S.ScoreBoardTitleHeader>
                    <tr>
                        <S.ScoreBoardTitle>Basic Score</S.ScoreBoardTitle>
                    </tr>
                    </S.ScoreBoardTitleHeader>
                    <tbody>
                    <tr>
                        <S.ScoreTitle 
                            onMouseEnter={props.onHoverAces}
                            onMouseLeave={props.onLeaveAces}
                            onClick={props.onClickAces}
                            isFix={props.fixScore[0]}
                            isAvailable={props.isMyTurn}>
                            Aces
                        </S.ScoreTitle>
                        <S.Score>{props.aces}</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle
                            onMouseEnter={props.onHoverDeuces}
                            onMouseLeave={props.onLeaveDeuces}
                            onClick={props.onClickDeuces}
                            isFix={props.fixScore[1]}
                            isAvailable={props.isMyTurn}>
                            Deuces</S.ScoreTitle>
                        <S.Score>{props.deuces}</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle
                            onMouseEnter={props.onHoverThrees}
                            onMouseLeave={props.onLeaveThrees}
                            onClick={props.onClickThrees}
                            isFix={props.fixScore[2]}
                            isAvailable={props.isMyTurn}>
                            Threes</S.ScoreTitle>
                        <S.Score>{props.threes}</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle
                            onMouseEnter={props.onHoverFours}
                            onMouseLeave={props.onLeaveFours}
                            onClick={props.onClickFours}
                            isFix={props.fixScore[3]}
                            isAvailable={props.isMyTurn}>
                            Fours</S.ScoreTitle>
                        <S.Score>{props.fours}</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle
                            onMouseEnter={props.onHoverFives}
                            onMouseLeave={props.onLeaveFives}
                            onClick={props.onClickFives}
                            isFix={props.fixScore[4]}
                            isAvailable={props.isMyTurn}>
                            Fives</S.ScoreTitle>
                        <S.Score>{props.fives}</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle
                            onMouseEnter={props.onHoverSixes}
                            onMouseLeave={props.onLeaveSixes}
                            onClick={props.onClickSixes}
                            isFix={props.fixScore[5]}
                            isAvailable={props.isMyTurn}>
                            Sixes</S.ScoreTitle>
                        <S.Score>{props.sixes}</S.Score>
                    </tr>
                    <tr>
                        <S.TotalScore>Subtotal</S.TotalScore>
                        <S.Score>{props.subtotal}</S.Score>
                    </tr>
                    </tbody>
                </S.BasicScoreBoard>
                <S.SpecialScoreBoard>
                    <S.ScoreBoardTitleHeader>
                    <tr>
                        <S.ScoreBoardTitle>Special Score</S.ScoreBoardTitle>
                    </tr>
                    </S.ScoreBoardTitleHeader>
                    <tbody>
                    <tr>
                        <S.ScoreTitle
                            onMouseEnter={props.onHoverChoice}
                            onMouseLeave={props.onLeaveChoice}
                            onClick={props.onClickChoice}
                            isFix={props.fixScore[6]}
                            isAvailable={props.isMyTurn}>
                            Choice</S.ScoreTitle>
                        <S.Score>{props.choice}</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle
                            onMouseEnter={props.onHoverFourOfAKind}
                            onMouseLeave={props.onLeaveFourOfAKind}
                            onClick={props.onClickFourOfAKind}
                            isFix={props.fixScore[7]}
                            isAvailable={props.isMyTurn}>
                            4 of a Kind</S.ScoreTitle>
                        <S.Score>{props.fourOfAKind}</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle
                            onMouseEnter={props.onHoverFullHouse}
                            onMouseLeave={props.onLeaveFullHouse}
                            onClick={props.onClickFullHouse}
                            isFix={props.fixScore[8]}
                            isAvailable={props.isMyTurn}>
                            Full House</S.ScoreTitle>
                        <S.Score>{props.fullHouse}</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle
                            onMouseEnter={props.onHoverSmallStraight}
                            onMouseLeave={props.onLeaveSmallStraight}
                            onClick={props.onClickSmallStraight}
                            isFix={props.fixScore[9]}
                            isAvailable={props.isMyTurn}>
                            S.Straight</S.ScoreTitle>
                        <S.Score>{props.smallStraight}</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle
                            onMouseEnter={props.onHoverLargeStraight}
                            onMouseLeave={props.onLeaveLargeStraight}
                            onClick={props.onClickLargeStraight}
                            isFix={props.fixScore[10]}
                            isAvailable={props.isMyTurn}>
                            L.Straight</S.ScoreTitle>
                        <S.Score>{props.largeStraight}</S.Score>
                    </tr>
                    <tr>
                        <S.ScoreTitle
                            onMouseEnter={props.onHoverYacht}
                            onMouseLeave={props.onLeaveYacht}
                            onClick={props.onClickYacht}
                            isFix={props.fixScore[11]}
                            isAvailable={props.isMyTurn}>
                            Yacht</S.ScoreTitle>
                        <S.Score>{props.yacht}</S.Score>
                    </tr>
                    <tr>
                        <S.TotalScore>Total Score</S.TotalScore>
                        <S.Score>{props.total}</S.Score>
                    </tr>
                    </tbody>
                </S.SpecialScoreBoard>
            </S.PlayerBoard>
        </>
    );
}