FactoryBot.define do
  factory :task do
    sequence(:title) { |n| "test_title#{n}"}
    sequence(:detail) { |n| "test_detail#{n}"}

    trait :without_title do
      title {nil}
    end

    trait :without_detail do
      detail {nil}
    end
  end
end
