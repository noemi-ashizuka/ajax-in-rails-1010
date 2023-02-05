# we check if review is saved
if @review.persisted?
  # if saved we want to render the empty form
  json.form render(partial: "reviews/form", formats: :html, locals: {restaurant: @restaurant, review: Review.new}) 
# we want to render the created review
  json.inserted_element render(partial: "reviews/review", formats: :html, locals: {review: @review})
else
# if not saved
# we want to re-render the form with errors
  json.form render(partial: "reviews/form", formats: :html, locals: {restaurant: @restaurant, review: @review}) 
end
