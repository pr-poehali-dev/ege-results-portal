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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
      { id: 1, answer: "5", maxScore: 1, score: 1, type: "test" },
      { id: 2, answer: "12", maxScore: 1, score: 1, type: "test" },
      { id: 3, answer: "0.25", maxScore: 1, score: 1, type: "test" },
      { id: 4, answer: "7", maxScore: 1, score: 1, type: "test" },
      {
        id: 5,
        answer: "Не выполнено",
        maxScore: 3,
        score: 0,
        type: "detailed",
        criteria: "Решение не представлено",
      },
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
      { id: 1, answer: "23", maxScore: 1, score: 1, type: "test" },
      { id: 2, answer: "также", maxScore: 1, score: 1, type: "test" },
      { id: 3, answer: "2", maxScore: 1, score: 1, type: "test" },
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
      { id: 1, answer: "3", maxScore: 1, score: 0, type: "test" },
      { id: 2, answer: "8", maxScore: 1, score: 1, type: "test" },
      { id: 3, answer: "150", maxScore: 1, score: 1, type: "test" },
    ],
  },
];

const mockStudents = [
  { id: 1, name: "Иванов Иван", number: "1234567890" },
  { id: 2, name: "Петрова Анна", number: "0987654321" },
  { id: 3, name: "Сидоров Петр", number: "1122334455" },
];

const Index = () => {
  const [userType, setUserType] = useState(null); // "student" or "admin"
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginNumber, setLoginNumber] = useState("");
  const [loginSurname, setLoginSurname] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [selectedExam, setSelectedExam] = useState(null);
  const [showAppeal, setShowAppeal] = useState(false);

  // Admin states
  const [exams, setExams] = useState(mockExams);
  const [students, setStudents] = useState(mockStudents);
  const [showCreateExamDialog, setShowCreateExamDialog] = useState(false);
  const [showCreateStudentDialog, setShowCreateStudentDialog] = useState(false);
  const [newExam, setNewExam] = useState({ name: "", date: "", minScore: "" });
  const [newStudent, setNewStudent] = useState({ name: "", number: "" });
  const [selectedExamForEdit, setSelectedExamForEdit] = useState(null);
  const [newTask, setNewTask] = useState({
    type: "test",
    maxScore: 1,
    criteria: "",
  });

  const handleStudentLogin = () => {
    if (loginNumber.length === 10 && loginSurname.trim()) {
      const student = mockStudents.find(
        (s) =>
          s.number === loginNumber &&
          s.name.toLowerCase().includes(loginSurname.toLowerCase()),
      );
      if (student) {
        setIsAuthenticated(true);
        setUserType("student");
      }
    }
  };

  const handleAdminLogin = () => {
    if (adminPassword === "admin123") {
      setIsAuthenticated(true);
      setUserType("admin");
    }
  };

  const handleExamClick = (exam) => {
    setSelectedExam(exam);
  };

  const handleAppeal = () => {
    setShowAppeal(true);
  };

  const handleCreateExam = () => {
    if (newExam.name && newExam.date && newExam.minScore) {
      const exam = {
        id: exams.length + 1,
        name: newExam.name,
        date: newExam.date,
        minScore: parseInt(newExam.minScore),
        score: 0,
        passed: false,
        tasks: [],
      };
      setExams([...exams, exam]);
      setNewExam({ name: "", date: "", minScore: "" });
      setShowCreateExamDialog(false);
    }
  };

  const handleCreateStudent = () => {
    if (newStudent.name && newStudent.number) {
      const student = {
        id: students.length + 1,
        name: newStudent.name,
        number: newStudent.number,
      };
      setStudents([...students, student]);
      setNewStudent({ name: "", number: "" });
      setShowCreateStudentDialog(false);
    }
  };

  const handleAddTask = () => {
    if (selectedExamForEdit && newTask.type) {
      const updatedExams = exams.map((exam) => {
        if (exam.id === selectedExamForEdit.id) {
          const task = {
            id: exam.tasks.length + 1,
            type: newTask.type,
            maxScore: parseInt(newTask.maxScore),
            answer: "",
            score: 0,
            criteria: newTask.criteria,
          };
          return { ...exam, tasks: [...exam.tasks, task] };
        }
        return exam;
      });
      setExams(updatedExams);
      setSelectedExamForEdit(
        updatedExams.find((e) => e.id === selectedExamForEdit.id),
      );
      setNewTask({ type: "test", maxScore: 1, criteria: "" });
    }
  };

  if (!userType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          {/* Student Login */}
          <Card className="w-full">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Icon name="GraduationCap" className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Личный кабинет
              </CardTitle>
              <CardDescription>Для учащихся</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="loginNumber">Номер участника (10 цифр)</Label>
                <Input
                  id="loginNumber"
                  type="text"
                  placeholder="1234567890"
                  value={loginNumber}
                  onChange={(e) =>
                    setLoginNumber(
                      e.target.value.replace(/\D/g, "").slice(0, 10),
                    )
                  }
                  className="text-center text-lg font-mono"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="loginSurname">Фамилия</Label>
                <Input
                  id="loginSurname"
                  type="text"
                  placeholder="Иванов"
                  value={loginSurname}
                  onChange={(e) => setLoginSurname(e.target.value)}
                  className="text-center"
                />
              </div>
              <Button
                onClick={handleStudentLogin}
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={loginNumber.length !== 10 || !loginSurname.trim()}
              >
                Войти как учащийся
              </Button>
            </CardContent>
          </Card>

          {/* Admin Login */}
          <Card className="w-full">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <Icon name="Settings" className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Админ-панель
              </CardTitle>
              <CardDescription>Для администраторов</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="adminPassword">Пароль администратора</Label>
                <Input
                  id="adminPassword"
                  type="password"
                  placeholder="••••••••"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="text-center"
                />
              </div>
              <Button
                onClick={handleAdminLogin}
                className="w-full bg-red-600 hover:bg-red-700"
                disabled={!adminPassword}
              >
                Войти как админ
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Admin Panel
  if (userType === "admin") {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <Icon name="Settings" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    Админ-панель ЕГЭ
                  </h1>
                  <p className="text-sm text-gray-600">
                    Управление экзаменами и учащимися
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setUserType(null);
                  setIsAuthenticated(false);
                }}
              >
                <Icon name="LogOut" className="w-4 h-4 mr-2" />
                Выход
              </Button>
            </div>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 py-8">
          <Tabs defaultValue="exams" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="exams">Экзамены</TabsTrigger>
              <TabsTrigger value="students">Учащиеся</TabsTrigger>
            </TabsList>

            <TabsContent value="exams" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Управление экзаменами</h2>
                <Dialog
                  open={showCreateExamDialog}
                  onOpenChange={setShowCreateExamDialog}
                >
                  <DialogTrigger asChild>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Icon name="Plus" className="w-4 h-4 mr-2" />
                      Создать экзамен
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Создание нового экзамена</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="examName">Название экзамена</Label>
                        <Input
                          id="examName"
                          placeholder="Математика (профильная)"
                          value={newExam.name}
                          onChange={(e) =>
                            setNewExam({ ...newExam, name: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="examDate">Дата проведения</Label>
                        <Input
                          id="examDate"
                          type="date"
                          value={newExam.date}
                          onChange={(e) =>
                            setNewExam({ ...newExam, date: e.target.value })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="minScore">Минимальный балл</Label>
                        <Input
                          id="minScore"
                          type="number"
                          placeholder="39"
                          value={newExam.minScore}
                          onChange={(e) =>
                            setNewExam({ ...newExam, minScore: e.target.value })
                          }
                        />
                      </div>
                      <Button onClick={handleCreateExam} className="w-full">
                        Создать экзамен
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exams.map((exam) => (
                  <Card
                    key={exam.id}
                    className="cursor-pointer hover:shadow-md transition-shadow"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg">{exam.name}</CardTitle>
                      <CardDescription>Дата: {exam.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Минимальный балл:</span>
                          <span>{exam.minScore}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Заданий:</span>
                          <span>{exam.tasks.length}</span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          onClick={() => setSelectedExamForEdit(exam)}
                        >
                          <Icon name="Edit" className="w-4 h-4 mr-2" />
                          Редактировать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {selectedExamForEdit && (
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>
                      Редактирование: {selectedExamForEdit.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Задания</h3>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              size="sm"
                              className="bg-blue-600 hover:bg-blue-700"
                            >
                              <Icon name="Plus" className="w-4 h-4 mr-2" />
                              Добавить задание
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Добавление задания</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label>Тип задания</Label>
                                <Select
                                  value={newTask.type}
                                  onValueChange={(value) =>
                                    setNewTask({ ...newTask, type: value })
                                  }
                                >
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="test">
                                      Тестовая часть
                                    </SelectItem>
                                    <SelectItem value="detailed">
                                      Развернутый ответ
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="maxScore">
                                  Максимальный балл
                                </Label>
                                <Input
                                  id="maxScore"
                                  type="number"
                                  value={newTask.maxScore}
                                  onChange={(e) =>
                                    setNewTask({
                                      ...newTask,
                                      maxScore: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              {newTask.type === "detailed" && (
                                <div className="space-y-2">
                                  <Label htmlFor="criteria">
                                    Критерии оценивания
                                  </Label>
                                  <Textarea
                                    id="criteria"
                                    placeholder="Опишите критерии оценивания..."
                                    value={newTask.criteria}
                                    onChange={(e) =>
                                      setNewTask({
                                        ...newTask,
                                        criteria: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                              )}
                              <Button
                                onClick={handleAddTask}
                                className="w-full"
                              >
                                Добавить задание
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                      <div className="space-y-2">
                        {selectedExamForEdit.tasks.map((task) => (
                          <div
                            key={task.id}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-xs font-medium text-blue-600">
                                  {task.id}
                                </span>
                              </div>
                              <div>
                                <Badge
                                  variant={
                                    task.type === "test"
                                      ? "default"
                                      : "secondary"
                                  }
                                >
                                  {task.type === "test"
                                    ? "Тест"
                                    : "Развернутый"}
                                </Badge>
                              </div>
                            </div>
                            <div className="text-sm text-gray-600">
                              Макс. балл: {task.maxScore}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="students" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Управление учащимися</h2>
                <Dialog
                  open={showCreateStudentDialog}
                  onOpenChange={setShowCreateStudentDialog}
                >
                  <DialogTrigger asChild>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Icon name="Plus" className="w-4 h-4 mr-2" />
                      Добавить учащегося
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Добавление учащегося</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="studentName">ФИО</Label>
                        <Input
                          id="studentName"
                          placeholder="Иванов Иван Иванович"
                          value={newStudent.name}
                          onChange={(e) =>
                            setNewStudent({
                              ...newStudent,
                              name: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="studentNumber">Номер участника</Label>
                        <Input
                          id="studentNumber"
                          placeholder="1234567890"
                          value={newStudent.number}
                          onChange={(e) =>
                            setNewStudent({
                              ...newStudent,
                              number: e.target.value
                                .replace(/\D/g, "")
                                .slice(0, 10),
                            })
                          }
                        />
                      </div>
                      <Button onClick={handleCreateStudent} className="w-full">
                        Добавить учащегося
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {students.map((student) => (
                  <Card key={student.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{student.name}</CardTitle>
                      <CardDescription>Номер: {student.number}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" size="sm" className="w-full">
                        <Icon name="Edit" className="w-4 h-4 mr-2" />
                        Редактировать
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    );
  }

  // Student Portal (existing code with minor updates)
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
                            <Badge
                              variant={
                                task.type === "test" ? "default" : "secondary"
                              }
                              className="mt-1"
                            >
                              {task.type === "test" ? "Тест" : "Развернутый"}
                            </Badge>
                            {task.criteria && (
                              <p className="text-sm text-gray-600 mt-1">
                                Критерий: {task.criteria}
                              </p>
                            )}
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
            <Button
              variant="outline"
              onClick={() => {
                setUserType(null);
                setIsAuthenticated(false);
              }}
            >
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
