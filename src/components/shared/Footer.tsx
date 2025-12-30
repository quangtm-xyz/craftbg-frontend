'use client';

import { useTranslation } from '../../lib/i18n';

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-[#0f0f0f] text-[#f5f5f5] pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    {/* Column 1: Logo & Description */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">B</span>
                            </div>
                            <span className="text-xl font-bold">
                                {t('footer.title')}
                            </span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            {t('footer.description')}
                        </p>
                    </div>

                    {/* Column 2: Features */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            {t('footer.features')}
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>{t('footer.feature1')}</li>
                            <li>{t('footer.feature2')}</li>
                            <li>{t('footer.feature3')}</li>
                            <li>{t('footer.feature4')}</li>
                        </ul>
                    </div>

                    {/* Column 3: Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            {t('footer.links')}
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>{t('footer.link1')}</li>
                            <li>{t('footer.link2')}</li>
                            <li>{t('footer.link3')}</li>
                        </ul>
                    </div>

                    {/* Column 4: Social */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            {t('footer.social')}
                        </h3>
                        <div className="flex gap-4">
                            {/* icons giữ nguyên */}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                    <p>{t('footer.copyright')}</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
