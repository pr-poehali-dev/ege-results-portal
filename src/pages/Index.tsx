import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

// Mock data
const mockExams = [
  {
    id: 1,
    name: "Математика (профильная)",
    date: "2024-06-03",
    score: 85,
    minScore: 39,
    passed: true,
    tasks: [
      { id: 1, answer: "5", maxScore: 1, score: 1 },
      { id: 2, answer: "12", maxScore: 1, score: 1 },
      { id: 3, answer: "0.25", maxScore: 1, score: 1 },
      { id: 4, answer: "7", maxScore: 1, score: 1 },
      { id: 5, answer: "Не выполнено", maxScore: 1, score: 0 },
    ],
  },
  {
    id: 2,
    name: "Русский язык",
    date: "2024-05-28",
    score: 92,
    minScore: 40,
    passed: true,
    tasks: [
      { id: 1, answer: "23", maxScore: 1, score: 1 },
      { id: 2, answer: "также", maxScore: 1, score: 1 },
      { id: 3, answer: "2", maxScore: 1, score: 1 },
    ],
  },
  {
    id: 3,
    name: "Физика",
    date: "2024-06-07",
    score: 32,
    minScore: 39,
    passed: false,
    tasks: [
      { id: 1, answer: "3", maxScore: 1, score: 0 },
      { id: 2, answer: "8", maxScore: 1, score: 1 },
      { id: 3, answer: "150", maxScore: 1, score: 1 },
    ],
  },
];

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginNumber, setLoginNumber] = useState("");
  const [selectedExam, setSelectedExam] = useState(null);
  const [showAppeal, setShowAppeal] = useState(false);

  const handleLogin = () => {
    if (loginNumber.length === 10) {
      setIsAuthenticated(true);
    }
  };

  const handleExamClick = (exam) => {
    setSelectedExam(exam);
  };

  const handleAppeal = () => {
    setShowAppeal(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <Icon name="GraduationCap" className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Портал ЕГЭ
            </CardTitle>
            <CardDescription>
              Войдите в систему для просмотра результатов
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="loginNumber"
                className="text-sm font-medium text-gray-700"
              >
                Номер участника (10 цифр)
              </label>
              <Input
                id="loginNumber"
                type="text"
                placeholder="1234567890"
                value={loginNumber}
                onChange={(e) =>
                  setLoginNumber(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
                className="text-center text-lg font-mono"
              />
            </div>
            <Button
              onClick={handleLogin}
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={loginNumber.length !== 10}
            >
              Войти
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (selectedExam) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Button
              variant="outline"
              onClick={() => setSelectedExam(null)}
              className="mb-4"
            >
              <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
              Назад к результатам
            </Button>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {selectedExam.name}
            </h1>
            <p className="text-gray-600">
              Дата проведения: {selectedExam.date}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Результаты по заданиям</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {selectedExam.tasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-blue-600">
                              {task.id}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium">Ответ: {task.answer}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant={
                              task.score === task.maxScore
                                ? "default"
                                : "destructive"
                            }
                          >
                            {task.score} / {task.maxScore}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Общий результат</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-bold text-gray-900">
                      {selectedExam.score}
                    </div>
                    <p className="text-gray-600">из 100 баллов</p>
                    <Badge
                      variant={selectedExam.passed ? "default" : "destructive"}
                      className="text-sm"
                    >
                      {selectedExam.passed ? "Экзамен сдан" : "Экзамен не сдан"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Сканы работы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="FileText" className="w-4 h-4 mr-2" />
                      Бланк ответов №1
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Icon name="FileText" className="w-4 h-4 mr-2" />
                      Бланк ответов №2
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Аппеляция</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={handleAppeal}
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    disabled={showAppeal}
                  >
                    <Icon name="AlertTriangle" className="w-4 h-4 mr-2" />
                    {showAppeal ? "Аппеляция подана" : "Подать аппеляцию"}
                  </Button>
                  {showAppeal && (
                    <p className="text-sm text-gray-600 mt-2">
                      Ваша аппеляция принята к рассмотрению
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Icon name="GraduationCap" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Портал ЕГЭ</h1>
                <p className="text-sm text-gray-600">Личный кабинет</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => setIsAuthenticated(false)}>
              <Icon name="LogOut" className="w-4 h-4 mr-2" />
              Выход
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <Tabs defaultValue="results" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="results">Результаты экзаменов</TabsTrigger>
            <TabsTrigger value="stats">Статистика</TabsTrigger>
          </TabsList>

          <TabsContent value="results" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockExams.map((exam) => (
                <Card
                  key={exam.id}
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => handleExamClick(exam)}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{exam.name}</CardTitle>
                    <CardDescription>Дата: {exam.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-gray-900">
                        {exam.score}
                      </div>
                      <Badge variant={exam.passed ? "default" : "destructive"}>
                        {exam.passed ? "Сдан" : "Не сдан"}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600">
                      Минимальный балл: {exam.minScore}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stats" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Всего экзаменов
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Сдано</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">2</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Не сдано
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">1</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Средний балл
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">69.7</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Распределение баллов</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockExams.map((exam) => (
                    <div key={exam.id} className="flex items-center space-x-4">
                      <div className="w-32 text-sm font-medium truncate">
                        {exam.name}
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${exam.passed ? "bg-green-500" : "bg-red-500"}`}
                          style={{ width: `${exam.score}%` }}
                        ></div>
                      </div>
                      <div className="text-sm font-medium w-12 text-right">
                        {exam.score}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
