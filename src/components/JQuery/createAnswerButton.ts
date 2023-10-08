import $ from 'jquery';
import AnswerButton from "../ui/AnswerButton/AnswerButton"

export default function createAnswerButton() { 
    return($('#arrows').append(AnswerButton()))
}