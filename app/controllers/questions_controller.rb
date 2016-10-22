class QuestionsController < ApplicationController

    def index
        questions = Question.all
        render json: questions, include: ['possibilities']
     end

    def create
        question = Question.new(question_params)
        if question.save
            render json: question
        else
            render json: { errors: question.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        question = Question.find(params[:id])
        render json: question, include: ['possibilities']
    end

    def update
        question = Question.find(params[:id])
        if question.update
            render json: question
        else
            render json: { errors: question.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        question = Question.find(params[:id])
        if question.update(question_params)
            render json: question
        else
            render json: question
        end
    end

    def destroy
        question = Question.find(params[:id])
        render json: question
    end

    private

    def question_params
        params.require(:question).permit(:text, :answered, :selected, :correct, :answer, :quiz_id, possibilities_attributes:[:answer])
    end
end
