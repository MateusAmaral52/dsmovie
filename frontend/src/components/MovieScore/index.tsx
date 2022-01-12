import MovieStars from "components/MovieStars";
import './styles.css';

function MovieScore() {
  const score = 3.5;
  const count = 13;

  return(
    <div className="dsmovie-score-container">
      <p className="dsmovie-score-value">{score > 0 ?/*then*/ score.toFixed(1) :/*else*/ "-"}</p>
      <MovieStars />
      <p className="dsmovie-score-count">{count} Avaliações</p>
    </div>
  );

}


export default MovieScore;