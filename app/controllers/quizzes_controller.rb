class QuizzesController < ApplicationController

    def index
        quizzes = Quiz.all
        render json: quizzes, include: ['category','questions', 'questions.possibilities']
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
        render json: quiz, include: ['category','questions', 'questions.possibilities']
    end

    def update
        quiz = Quiz.find(params[:id])
        if quiz.update
            render json: quiz
        else
            render json: { errors: quiz.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        quiz = Quiz.find(params[:id])
        render json: quiz
    end

    private

    def quiz_params
        params.require(:quiz).permit(:title, :description, :image, :category_id)
    end
end
