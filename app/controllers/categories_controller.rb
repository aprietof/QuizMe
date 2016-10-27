class CategoriesController < ApplicationController

    def index
        categories = Category.all
        render json: categories
     end

    private

    def quiz_params
        params.require(:category).permit(:name)
    end
end
