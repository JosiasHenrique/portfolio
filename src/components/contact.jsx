export default function Contact() {
    return (
        <section className="section-contact">
            <div>
                <div className="divider">
                    <span id="contato">Contato</span>
                </div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold">Fale comigo</h3>
                            <p className="mt-2 text-gray-600">
                                Entre em contato para dúvidas, colaborações ou apenas para bater um papo!
                            </p>
                            <div className="mt-4">
                                <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/josiashenrique/" className="text-blue-500">linkedin.com/in/josiashenrique</a></p>
                                <p><strong>GitHub:</strong> <a href="https://github.com/JosiasHenrique" className="text-blue-500">github.com/JosiasHenrique</a></p>
                                <p><strong>Instagram:</strong> <a href="https://www.instagram.com/josiashenrique.lc/" className="text-blue-500">@josiashenrique.lc</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}