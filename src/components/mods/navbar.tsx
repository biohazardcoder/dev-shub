import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog"; 
import { ModeToggle } from "../mode-toggle";
import { toast } from "sonner";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

export const Navbar = () => {
const [formData, setFormData] = useState({
  name: "",
  phone: "",
  address: "",
  studyType: "",
  level: "",
});
const resetFormData = () => {
  setFormData({
    name: "",
    phone: "",
    address: "",
    studyType: "",
    level: "",
  });
};

  const handleChange = (e:any) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};
const handleLevelChange = (value: string) => {
  setFormData({ ...formData, level: value });
};

const handleSubmit = async () => {
  const { name, phone, address, studyType } = formData;

  if (!name.trim()) {
    toast.error("Iltimos, ismingizni kiriting.");
    return;
  }
  if (!phone.trim()) {
    toast.error("Iltimos, telefon raqamingizni kiriting.");
    return;
  }
  if (!address.trim()) {
    toast.error("Iltimos, manzilingizni kiriting.");
    return;
  }
  if (!studyType) {
    toast.error("Iltimos, o'qish shaklini tanlang.");
    return;
  }
  if (!formData.level) {
  toast.error("Iltimos, darajangizni tanlang.");
  return;
}

  const BOT_TOKEN = "8192235783:AAEbaM8G_ID4Q0A1Yncz5qp6XfnSxpjg3rI"
  const CHAT_ID = "-1002865520752"

  const text = `
  ✅ Yangi foydalanuvchi ma'lumotlari:

  👤 Ismi: ${name}
  📞 Telefon: ${phone}
  📍 Manzil: ${address}
  🏫 O'qish shakli: ${studyType === "online" ? "Online" : "Offline"}
  🎯 Darajasi: ${formData.level}

  🚀 devs-hub.uz
  `;

  toast.promise(
    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "Markdown",
      }),
    }).then((res) => {
      if (!res.ok) throw new Error("Xatolik yuz berdi!");
      return res.json();
    }),
    {
      loading: "Yuborilmoqda...",
         success: () => {
      resetFormData();
      return "Ma'lumot muvaffaqiyatli yuborildi!";
    },
      error: "Xabarni yuborishda muammo bor.",
    }
  );
};



  return (
    <div className="w-full h-[10vh] bg-secondary flex items-center justify-between px-4 font-semibold">
      <Link to={"/"}>
        <h1>Devs Hub</h1>
      </Link>
      <div className="flex items-center gap-2">
        <Dialog onOpenChange={(open) => {
            if (!open) resetFormData();
          }}>
          <DialogTrigger asChild>
            <Button>Qo'shilish</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Foydalanuvchi qo'shish</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name">Ism</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="col-span-3"
                  placeholder="Ismingiz"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="col-span-3"
                  placeholder="+998*******"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="address">Manzil</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="col-span-3"
                  placeholder="Viloyatingiz"
                />
              </div>
                <div className="grid grid-cols-4 items-center gap-4">
                <Label>Darajangiz</Label>
                <div className="col-span-3">
                  <Select onValueChange={handleLevelChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Darajani tanlang" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Yangi">Yangi</SelectItem>
                      <SelectItem value="O‘rta">O‘rta</SelectItem>
                      <SelectItem value="Yuqori">Yuqori</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
               </div>
                 <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="studyType">O'qish shakli</Label>
                <div className="col-span-3 flex  gap-2">
                    <div className="flex items-center gap-2">
                    <Input
                        type="radio"
                        id="online"
                        name="studyType"
                        value="online"
                        checked={formData.studyType === "online"}
                        onChange={handleChange}
                        className="w-5 h-5"
                    />
                    <label htmlFor="online">Online</label>
                    </div>
                    <div className="flex items-center gap-2">
                    <Input
                        type="radio"
                        id="offline"
                        name="studyType"
                        value="offline"
                        checked={formData.studyType === "offline"}
                        onChange={handleChange}
                        className="w-5 h-5"
                    />
                    <label htmlFor="offline">Offisda</label>
                    </div>
                </div>
                  </div>
                </div>
            <DialogFooter>
              <Button type="submit" onClick={handleSubmit}>
                Yuborish
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <ModeToggle />
      </div>
    </div>
  );
};
