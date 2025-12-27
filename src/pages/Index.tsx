import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Dumbbell" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Buildbody
            </h1>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#workouts" className="hover:text-primary transition-colors">Тренировки</a>
            <a href="#nutrition" className="hover:text-primary transition-colors">Питание</a>
            <a href="#community" className="hover:text-primary transition-colors">Сообщество</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Начать тренировки
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                Построй тело{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  своей мечты
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Присоединяйся к сообществу единомышленников. Онлайн тренировки, планы питания и поддержка 24/7.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Zap" size={20} className="mr-2" />
                  Начать сейчас
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
              <img
                src="https://cdn.poehali.dev/projects/10bd9642-eb3b-42f2-b222-24efe7d310ef/files/a1959c3c-1451-4928-8491-4fe9286487f7.jpg"
                alt="Тренировки"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="workouts" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Программы тренировок</h2>
            <p className="text-xl text-muted-foreground">Выбери программу под свои цели</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Flame', title: 'Жиросжигание', desc: 'Интенсивные кардио и HIIT тренировки для быстрого результата', color: 'primary' },
              { icon: 'Sparkles', title: 'Набор массы', desc: 'Силовые тренировки с акцентом на рост мышц', color: 'secondary' },
              { icon: 'Heart', title: 'Тонус и здоровье', desc: 'Функциональные тренировки для общего укрепления тела', color: 'accent' },
            ].map((workout, idx) => (
              <Card key={idx} className="group hover:scale-105 transition-all duration-300 border-2 hover:border-primary bg-card animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-${workout.color} to-${workout.color}/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={workout.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{workout.title}</CardTitle>
                  <CardDescription className="text-base">{workout.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="nutrition" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-scale-in order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-l from-secondary/20 to-accent/20 blur-3xl rounded-full"></div>
              <img
                src="https://cdn.poehali.dev/projects/10bd9642-eb3b-42f2-b222-24efe7d310ef/files/52997df5-a33b-48ea-8cc0-aecf6ec46bb2.jpg"
                alt="Питание"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
            <div className="space-y-6 animate-fade-in order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold">
                Питание — это{' '}
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  80% успеха
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Получай персональные планы питания, рецепты и советы от профессиональных нутрициологов.
              </p>
              <div className="space-y-4">
                {[
                  { icon: 'Calculator', text: 'Калькулятор калорий и БЖУ' },
                  { icon: 'BookOpen', text: 'База из 500+ полезных рецептов' },
                  { icon: 'ListChecks', text: 'Готовые планы питания на неделю' },
                  { icon: 'ShoppingCart', text: 'Списки покупок в один клик' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center">
                      <Icon name={item.icon as any} size={24} className="text-white" />
                    </div>
                    <span className="text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наше сообщество</h2>
            <p className="text-xl text-muted-foreground">Реальные результаты реальных людей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Анна М.', result: '-15 кг за 3 месяца', text: 'Я наконец-то нашла систему, которая работает! Поддержка сообщества помогла не сдаться.' },
              { name: 'Дмитрий К.', result: '+8 кг мышц', text: 'Программы тренировок структурированы и эффективны. Виден прогресс каждую неделю!' },
              { name: 'Мария С.', result: 'Марафон через 6 месяцев', text: 'Начинала с нуля. Благодаря планам питания и тренировкам пробежала первый марафон!' },
            ].map((review, idx) => (
              <Card key={idx} className="bg-card border-2 hover:border-secondary transition-all animate-slide-up" style={{ animationDelay: `${idx * 0.15}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <p className="text-sm text-primary font-semibold">{review.result}</p>
                    </div>
                  </div>
                  <CardDescription className="text-base">{review.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl"></div>
            <img
              src="https://cdn.poehali.dev/projects/10bd9642-eb3b-42f2-b222-24efe7d310ef/files/58135667-9446-4d60-84ee-e2ac787d5d6e.jpg"
              alt="Сообщество"
              className="relative rounded-2xl shadow-2xl w-full max-w-4xl mx-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Остались вопросы?</h2>
            <p className="text-xl text-muted-foreground">Напиши нам — ответим в течение 24 часов</p>
          </div>
          <Card className="bg-card border-2 border-border animate-scale-in">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">Имя</label>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите о своих целях..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-background"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-card border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Dumbbell" size={28} className="text-primary" />
                <h3 className="text-xl font-bold">Buildbody</h3>
              </div>
              <p className="text-muted-foreground">Твой путь к идеальному телу начинается здесь</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Программы</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Жиросжигание</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Набор массы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Тонус</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-muted-foreground border-t border-border pt-8">
            <p>&copy; 2024 Buildbody. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
