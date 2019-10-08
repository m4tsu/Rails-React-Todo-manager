FactoryBot.define do
  factory :task do
    sequence(:title) { |n| "test_title#{n}"}
    sequence(:content) { |n| "test_content#{n}"}

    trait :without_title do
      title {nil}
    end

    trait :without_content do
      content {nil}
    end
  end
end
