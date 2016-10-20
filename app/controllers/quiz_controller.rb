class QuizController < ApplicationController

    def index
        quizzes = Quiz.all
        render json: quizzes, include: ['questions', 'questions.possibilities']
     end

    def create
        quiz = Quiz.new(quiz_params)
        if quiz.save
            render json: quiz
        else
            render json: { errors: quiz.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        quiz = Quiz.find(params[:id])
        render json: quiz, include: ['questions', 'questions.possibilities']
    end

    def update
        quiz = Quiz.find(params[:id])
        if quiz.update
            render json: quiz
        else
            render json: { errors: quiz.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        quiz = Quiz.find(params[:id])
        if quiz.update(quiz_params)
            render json: quiz
        else
            render json: quiz
        end
    end

    def destroy
        quiz = Quiz.find(params[:id])
        render json: quiz
    end

    private

    def quiz_params
        params.require(:quiz).permit(:content)
    end
end
