import { allFAQs, FAQ } from "../.contentlayer/generated"
import { FAQItem } from "./FAQItem"

export default function FAQSection() {
  return (
      <div className="grid xl:grid-cols-2 gap-4 flex-wrap">
      {allFAQs.map((item: FAQ) => (
        <FAQItem
          key={item._id}
          question={item.question}
          answer={item.answer}
          />
        ))}
      </div>
  )
}
