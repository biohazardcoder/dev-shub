import { Facebook, Instagram, Twitter,Linkedin } from 'lucide-react'
import { Button } from '../ui/button'

const Footer = () => {
  return (
    <footer className="bg-secondary  py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold  mb-4">Devs Hub</h3>
              <p className=" leading-relaxed">
               Ishlab chiquvchilarning keyingi avlodiga jahon darajasidagi ta'lim va martaba yordami bilan imkoniyat berish.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Dasturlar</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Web Dasturlash</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Mobil Dasturlash</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Full-Stack Bootcamp</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Maxsus Kurslar</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Qo'llab-quvvatlash</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Talaba Portal</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Karyera Xizmatlari</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Yordam Markazi</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Jamoa Forum</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold  mb-4">Aloqa</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-secondary-foreground text-secondary rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-secondary-foreground text-secondary rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-secondary-foreground text-secondary rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-secondary-foreground text-secondary rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <h4 className="font-semibold  my-4">Telefon raqam</h4>
            <a href="tel:+998336116383">
              <Button className=''>+998 33 611-63-83</Button>
            </a>
            </div>
          </div>
          <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-500">
            <p>&copy; 2025 Devs Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer