class PossibilitiesController < ApplicationController

    def index
        possibilities = Possibility.all
        render json: possibilities
     end

    def create
        possibility = Possibility.new(possibility_params)
        if possibility.save
            render json: possibility
        else
            render json: { errors: possibility.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        possibility = Possibility.find(params[:id])
        render json: possibility
    end

    def update
        possibility = Possibility.find(params[:id])
        if possibility.update
            render json: possibility
        else
            render json: { errors: possibility.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        possibility = Possibility.find(params[:id])
        render json: possibility
    end

    private

    def possibility_params
        params.require(:possibility).permit(:answer)
    end
end
