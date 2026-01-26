import React from "react";
import Image from "next/image";

export default function NewestProjects() {
    return (
        <section className="py-20 bg-background-light">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Newest Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
                    {/* Bento 1 */}
                    <div className="rounded-2xl overflow-hidden shadow-lg relative group">
                        <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCbDptvI56HJWl3_dj2_Pc4eEvWhyds4igYCH2R7DjFelXaMriZfCnL8K_sNoqkhpdg6NnVPwrvFcaKihSc61Hq-sPH8sZ4aalohpsc2Yt1_uunw0aESZpmjJNAXNEiErL1z6Q0tT_KA37CKwBpagGQIyQ64qlG-mMdIYQgWMAdR3UTDkqHCMaCdZ22jx-GefxWWP1kCidoLCqJ_ZlscmlG7yxKa2cBj-6YcNm1ZR37qwPSGNWTZlD-vpTRe5Tt0N9Oe9j0N9VOU8" alt="Purple gradient abstract" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    {/* Bento 2 - Wide */}
                    <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg relative group bg-white">
                        <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXXY8HDHuIyBAvc1V-bSbAvSmnDOFEtnfFW2RmojmUXvQx18YhqMrPuHci_n_NHc6sC1I6qcFfusYnrjHlUUISGA-S4LZWp0NBHV1r9s0j6cXxevSHYkV-rXWrygXs0rdnrs8fPwWch7KfFPH9iLpaLVseifDQZ9yx8M0P0iWotY97YLgxY7530sINSxKVTcZuMv-Q8DEqypG_y2oIqQHSty3GdXtmF0vUKQttij6raeOti1bgz5Y4e0jCdOBb3sV8d6m9n_GtZcY" alt="White abstract waves" fill className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    {/* Bento 3 */}
                    <div className="rounded-2xl overflow-hidden shadow-lg relative group">
                        <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5swcY0skzpgzQMBGjZVTT5jbu8G5I3zMLjs9swAsl45go6SMQuGMYFTI70n2mlpbP_s7CO0niYi4AU4Xw0LB128TjVNQzdWwJaZ64WU4GsfgJgW9v53xgvDsAzXC7tzvKaqWJU8NjuEgE2NbCEdZVJJFH184JCqWjopnf-V-tivarVi7go5h6sxAdnCcoqXUKXWNoXAgFdCtDoUw3wN96Vue9MSc6L3MgZY1Hp3YXEz65VhTaa_hbmixpnOmU8XmAaUTL42th5Tg" alt="Gold vertical lines abstract" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    {/* Bento 4 - Tall */}
                    <div className="md:row-span-2 rounded-2xl overflow-hidden shadow-lg relative group">
                        <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDndzaDwzv-9ZNj1zI37wA80jSiOZet5OdAdM4E3ka_6aLsYEqpDdTQBdUwso2V8xwytqAjskE7Da-pfTofz7DSAsuloc69j-fkTi4qKqEeSDnQRXPB8TdrCNlV4-NmQcLDuIhqfiCDwFQCiuJjrzw4iG-zfNqdk_E9JcZD3Es0cqRrg_G1YnIRLkZ9I5leInWyWZnJibiCS-te5ASo185Q39uueM_dIBOtaaYKWFGSrE0NxQ9GQnwabyol1DeSYr1oU9XQS8ehcy8" alt="Orange gradient blur" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    {/* Bento 5 */}
                    <div className="rounded-2xl overflow-hidden shadow-lg relative group">
                        <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeg1F4u1XLIKSGK9QJE1HP0ptQLAgaP96jyf52FyG4ZnxDVZG3QQun2wyglBNj_qu-6wjVZpabpio33tbWWJqlKm6bJb9jv8dnu_5XNZQHsvMVBEw-rvkFKZvzHsHgxL290CL1G9yzbj7P5NmaTVza77qTcI-CzDIpOt-yh3A1F5DDhQhd-V741Z6Md4Vww2aRTSbDvErL4_AKn_5xhL37xNA8WMWHDPaMJIrtdwysbxr5m6wWO7X0SzcOCA3EY73hc3KVkd-jjfU" alt="Blue abstract shapes" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    {/* Bento 6 */}
                    <div className="rounded-2xl overflow-hidden shadow-lg relative group">
                        <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAERpBVOHZIDRe_Syr8ltWXGH6nB01RsUl9GwcDG27racXoNLGLIw6ZhdunNWhK81Z80z6494MmncWOlabHcIYh3pytsWJC6waY-LwQvL2bUx-Rzu2kh_EFumuFtECAr7KMAleGa5xEheeUbBw1Ib8e8r6VswoxO2mPJVMLIG3novx8_Cb0zMMPz9jA02zDfRsygpV269KNMmagSYgEOrwuNiJd-4DX26qDUIy-_9xQVK-WoLK3XAAdIGtP9B-q6-YG_Cr0lllRg4g" alt="Dark purple texture" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    {/* Bento 7 */}
                    <div className="rounded-2xl overflow-hidden shadow-lg relative group">
                        <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdd3wjIsAv5YS7NZ6m1wMMZCphcSTSNptKaLl6q6Sdacti4RHX8tN2nsbvKNoBQlgc1R_IzswfFjGr7XGeSfIGAZLd2qZUwZd8jVGofuWby3yDf31utNlUR5jLB4AKnc82MCxdtn6XDDbKaJklQ_03D73WvFpq_wUmS-JvIejiHYpEmYnfx4nnfe872v0k8rmfzE10ObfP5EM9TALL5t5432kq1GvC_6e0xbXpCleYhmCb4WcQwlwWlAeqqVI3KZJiLUNijPKtqV8" alt="Colorful abstract swirl" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                </div>
            </div>
        </section>
    );
}
