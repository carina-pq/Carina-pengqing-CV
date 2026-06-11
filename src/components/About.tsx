export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
          关于我
        </h2>

        <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            我是一名拥有 5 年经验的全栈开发者，热衷于用技术创造价值。
            擅长 React、TypeScript、Node.js 等技术栈，
            对前端性能优化和用户体验有深入理解。
          </p>
          <p>
            工作之余，我喜欢参与开源项目、撰写技术博客，
            以及探索 AI 与 Web 技术的结合。相信好的代码既是艺术品，
            也是解决问题的利器。
          </p>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
          {[
            { value: '5+', label: '年经验' },
            { value: '30+', label: '完成项目' },
            { value: '15+', label: '合作客户' },
            { value: '100%', label: '准时交付' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800"
            >
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
/Users/qp/Downloads/IMG_6200 2.jpg

/Users/qp/Downloads/4B5B2F58-6B95-4877-BB8C-66EBE4693824.jpg