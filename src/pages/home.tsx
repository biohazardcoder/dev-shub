import { Navbar } from "@/components/mods/navbar"
import { Button } from "@/components/ui/button"
import { Award, Briefcase, Check, Clock, Code,  Eye,  GraduationCap, Handshake, Projector, Smartphone, Star, UserCheck, Users } from "lucide-react"
import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card";

export const Home = () => {
  return (
    <div>
      <Navbar />
       <main className="relative min-h-[90vh]">
        <div className="relative mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span >
                 Dasturlash {" "}
              </span>
              san’atini puxta egallang 
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto ">
              Kasbingizni tubdan o‘zgartiring — bizning Web va Mobil dasturlash akademiyamiz orqali. Soha mutaxassislaridan o‘rganing va haqiqiy loyihalarni yarating.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#courses" >
                <Button>
                  Bizning yo'nalishlar
                </Button>
              </a>
              <a href="#projects">
                <Button variant="outline">
                  Bizning loyihalar
                </Button>
              </a>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-zinc-400">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-400" />
                <span>*** Talabalar</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>*/* Reyting</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-400" />
                <span>**% Ishga joylashish</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Nima uchun Devs Hub ni tanlash kerak?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Biz sizning dasturlash karerangizda muvaffaqiyat qozonishingiz uchun zarur bo'lgan hamma narsani taqdim etamiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-primary-foreground shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold  mb-2">Tajribali O'qituvchilar</h3>
                <p className="text-muted-foreground font-semibold">Yillar davomida haqiqiy tajribaga ega bo'lgan sanoat mutaxassislardan o'rganing</p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Projector className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold  mb-2">Haqiqiy Loyihalar</h3>
                <p className="text-muted-foreground font-semibold">Ishlatilgan haqiqiy loyihalar bilan portfel yarating</p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <UserCheck className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold  mb-2">Jamoa Qo'llab-quvvatlashi</h3>
                <p className="text-muted-foreground font-semibold">Dasturchilar va umrbod o'rganuvchilar jamoasiga qo'shiling</p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold  mb-2">Moslashuvchan Jadval</h3>
                <p className="text-muted-foreground font-semibold">O'zingizning tezligingizda o'rganing, to'liq vaqtda yoki qisman vaqtli variantlar bilan</p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Handshake className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold  mb-2">Ishga joylashish</h3>
                <p className="text-muted-foreground font-semibold">Bitiruvdan so'ng karera qo'llab-quvvatlash va ishga joylashish yordamidan foydalaning</p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold  mb-2">Sanoat Sertifikati</h3>
                <p className="text-muted-foreground font-semibold">Ish beruvchilar qadrlaydigan tan olingan sertifikatlarni oling</p>
              </CardContent>
            </Card>
          </div>
          
        </div>
      </section>
      <section className="py-10" id="courses">
        <div className="mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Dasturlash kurslarimiz
            </h2>
            <p className="text-xl  max-w-2xl mx-auto">
              Boshlang‘ichdan professionalgacha yetaklaydigan kurslarimizdan tanlang            
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <Code className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Web Dasturlash</h3>
                <p className=" mb-6 leading-relaxed">
                  Zamonaviy web texnologiyalarni — React, Node.js, TypeScript va full-stack dasturlashni chuqur o‘rganing. Noldan boshlab mukammal web ilovalar yarating.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Frontend va Backend dasturlash</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>React, Next.js, TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Ma’lumotlar bazasi tuzilmasi va API lar</span>
                  </div>
                </div>
                <Link to={"https://t.me/mrbiohazard"} target="_blank">
                <Button className="w-full">
                  Bog'lanish
                </Button>
                </Link>
              </CardContent>
            </Card>

            <Card >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <Smartphone className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Mobil Dasturlash</h3>
                <p className="mb-6 leading-relaxed">
                  React Native yordamida native va cross-platform mobil ilovalar yarating.
                  Ilovalarni iOS va Android platformalariga joylashtiring.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>iOS va Android Dasturlash</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>React Native</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>App Store va Google Play ga joylashtirish</span>
                  </div>
                </div>
             <Link to={"https://t.me/mrbiohazard"} target="_blank">
                <Button className="w-full">
                  Bog'lanish
                </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 " id="projects">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Bizning loyihalar
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Biz sizning rivojlanish karerangizda muvaffaqiyat qozonishingiz uchun zarur bo'lgan hamma narsani taqdim etamiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-primary-foreground shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <img src="/logo.png" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold  mb-2">Aura Nova</h3>
                <p className="text-muted-foreground font-semibold">Filmlar, Animelar, Dramalar va Qiziqarli Podkastlarni o'z ichiga olgan kinoteatr</p>
                <Link to={"https://auranova.uz"} className="flex items-center justify-end mt-2" target="_blank">
                <Button>
                  Tashrif buyurish
                </Button>
                </Link>
                </CardContent>
            </Card>

            <Card className="bg-primary-foreground shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <img src="/logo.png" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold  mb-2">Aura Nova Shop</h3>
                <p className="text-muted-foreground font-semibold">Onlayn do'kon, siz ushbu platformada turli xil mahsulotlarni xarid qilishingiz mumkin</p>
                 <Link to={"https://shop.auranova.uz"} className="flex items-center justify-end mt-2" target="_blank">
                <Button>
                  Tashrif buyurish
                </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <img src="/scroll.svg" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold  mb-2">JT-SPACE</h3>
                <p className="text-muted-foreground font-semibold">Ushbu web site yangi dasturchilarga "scroll-animetion" va dizayn bo'yicha ko'rsatmalar berish uchun yaratilgan</p>
               <Link to={"https://space.auranova.uz"} className="flex items-center justify-end mt-2" target="_blank">
                <Button>
                  Tashrif buyurish
                </Button>
                </Link>
                </CardContent>
            </Card>
          </div>
         <div className="text-center mb-16 mt-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Demo loyihalar
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <Card className="bg-primary-foreground shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold  mb-2">HLB MOTORS</h3>
               <Link to={"https://hlb.vercel.app/"} className="flex items-center justify-end mt-2">
                <Button>
                  <Eye/>
                </Button>
                </Link>
              </CardContent>
            </Card>
             <Card className="bg-primary-foreground shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold  mb-2">HLB MOTORS 2</h3>
               <Link to={"https://hlb2.vercel.app/"} className="flex items-center justify-end mt-2">
                <Button>
                  <Eye/>
                </Button>
                </Link>
              </CardContent>
            </Card>

             <Card className="bg-primary-foreground shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold  mb-2">Car Leadership</h3>
               <Link to={"https://car-delership.vercel.app/"} className="flex items-center justify-end mt-2">
                <Button>
                  <Eye/>
                </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold  mb-2">Jellyfish</h3>
               <Link to={"https://jellyfish-phi.vercel.app/"} className="flex items-center justify-end mt-2">
                <Button>
                  <Eye/>
                </Button>
                </Link>
              </CardContent>
            </Card>
             
             <Card className="bg-primary-foreground shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold  mb-2">Dentist</h3>
               <Link to={"https://dentits.vercel.app/"} className="flex items-center justify-end mt-2">
                <Button>
                  <Eye/>
                </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground shadow-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold  mb-2">Play Market Clone</h3>
               <Link to={"https://games.auranova.uz"} className="flex items-center justify-end mt-2">
                <Button>
                  <Eye/>
                </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
