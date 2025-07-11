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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

// Mock data with enhanced structure
const mockExams = [
  {
    id: 1,
    name: "Математика (профильная)",
    date: "2024-06-03",
    minScore: 39,
    scaleTable: {
      0: 0,
      1: 5,
      2: 9,
      3: 14,
      4: 18,
      5: 23,
      6: 27,
      7: 33,
      8: 39,
      9: 45,
      10: 50,
      11: 56,
      12: 62,
      13: 68,
      14: 70,
      15: 72,
      16: 74,
      17: 76,
      18: 78,
      19: 80,
      20: 82,
      21: 84,
      22: 86,
      23: 88,
      24: 90,
      25: 92,
      26: 94,
      27: 96,
      28: 98,
      29: 99,
      30: 100,
    },
    tasks: [
      { id: 1, type: "test", maxScore: 1, description: "Простейшие уравнения" },
      {
        id: 2,
        type: "test",
        maxScore: 1,
        description: "Вычисления и преобразования",
      },
      { id: 3, type: "test", maxScore: 1, description: "Простейшие уравнения" },
      {
        id: 4,
        type: "test",
        maxScore: 1,
        description: "Вычисления и преобразования",
      },
      { id: 5, type: "test", maxScore: 1, description: "Простейшие уравнения" },
      { id: 6, type: "test", maxScore: 1, description: "Планиметрия" },
      {
        id: 7,
        type: "test",
        maxScore: 1,
        description: "Производная и первообразная",
      },
      { id: 8, type: "test", maxScore: 1, description: "Стереометрия" },
      {
        id: 9,
        type: "test",
        maxScore: 1,
        description: "Вычисления и преобразования",
      },
      {
        id: 10,
        type: "test",
        maxScore: 1,
        description: "Задачи с прикладным содержанием",
      },
      { id: 11, type: "test", maxScore: 1, description: "Текстовые задачи" },
      {
        id: 12,
        type: "test",
        maxScore: 1,
        description: "Наибольшее и наименьшее значение функций",
      },
      {
        id: 13,
        type: "detailed",
        maxScore: 2,
        description: "Уравнения",
        criteria: "Решение уравнений",
      },
      {
        id: 14,
        type: "detailed",
        maxScore: 2,
        description: "Стереометрическая задача",
        criteria: "Стереометрия",
      },
      {
        id: 15,
        type: "detailed",
        maxScore: 2,
        description: "Неравенства",
        criteria: "Решение неравенств",
      },
      {
        id: 16,
        type: "detailed",
        maxScore: 3,
        description: "Планиметрическая задача",
        criteria: "Планиметрия",
      },
      {
        id: 17,
        type: "detailed",
        maxScore: 4,
        description: "Финансовая математика",
        criteria: "Экономические задачи",
      },
      {
        id: 18,
        type: "detailed",
        maxScore: 4,
        description: "Параметры",
        criteria: "Задачи с параметрами",
      },
    ],
  },
  {
    id: 2,
    name: "Русский язык",
    date: "2024-05-28",
    minScore: 40,
    scaleTable: {
      0: 0,
      1: 3,
      2: 5,
      3: 8,
      4: 10,
      5: 12,
      6: 15,
      7: 17,
      8: 20,
      9: 22,
      10: 24,
      11: 26,
      12: 28,
      13: 30,
      14: 32,
      15: 34,
      16: 36,
      17: 38,
      18: 40,
      19: 41,
      20: 43,
      21: 45,
      22: 47,
      23: 48,
      24: 50,
      25: 52,
      26: 54,
      27: 56,
      28: 57,
      29: 59,
      30: 61,
      31: 63,
      32: 65,
      33: 67,
      34: 69,
      35: 71,
      36: 72,
      37: 74,
      38: 76,
      39: 78,
      40: 80,
      41: 82,
      42: 84,
      43: 86,
      44: 88,
      45: 90,
      46: 91,
      47: 93,
      48: 95,
      49: 97,
      50: 99,
      51: 100,
    },
    tasks: [
      {
        id: 1,
        type: "test",
        maxScore: 1,
        description: "Информационная обработка письменных текстов",
      },
      {
        id: 2,
        type: "test",
        maxScore: 1,
        description: "Средства связи предложений в тексте",
      },
      {
        id: 3,
        type: "test",
        maxScore: 1,
        description: "Лексическое значение слова",
      },
      { id: 4, type: "test", maxScore: 1, description: "Орфоэпические нормы" },
      { id: 5, type: "test", maxScore: 1, description: "Лексические нормы" },
      {
        id: 27,
        type: "detailed",
        maxScore: 25,
        description: "Сочинение",
        criteria: "Критерии K1-K12",
      },
    ],
  },
  {
    id: 3,
    name: "Физика",
    date: "2024-06-07",
    minScore: 39,
    scaleTable: {
      0: 0,
      1: 4,
      2: 7,
      3: 10,
      4: 14,
      5: 17,
      6: 20,
      7: 23,
      8: 27,
      9: 30,
      10: 33,
      11: 36,
      12: 39,
      13: 42,
      14: 45,
      15: 48,
      16: 51,
      17: 54,
      18: 56,
      19: 58,
      20: 60,
      21: 62,
      22: 64,
      23: 66,
      24: 68,
      25: 70,
      26: 72,
      27: 74,
      28: 76,
      29: 78,
      30: 80,
      31: 82,
      32: 84,
      33: 86,
      34: 88,
      35: 90,
      36: 92,
      37: 94,
      38: 96,
      39: 98,
      40: 100,
    },
    tasks: [
      { id: 1, type: "test", maxScore: 1, description: "Кинематика" },
      { id: 2, type: "test", maxScore: 1, description: "Законы сохранения" },
      { id: 3, type: "test", maxScore: 1, description: "Статика" },
      {
        id: 25,
        type: "detailed",
        maxScore: 2,
        description: "Механика",
        criteria: "Расчетная задача",
      },
      {
        id: 26,
        type: "detailed",
        maxScore: 2,
        description: "Молекулярная физика",
        criteria: "Расчетная задача",
      },
      {
        id: 27,
        type: "detailed",
        maxScore: 3,
        description: "Электродинамика",
        criteria: "Расчетная задача",
      },
      {
        id: 28,
        type: "detailed",
        maxScore: 3,
        description: "Электродинамика",
        criteria: "Расчетная задача",
      },
      {
        id: 29,
        type: "detailed",
        maxScore: 3,
        description: "Механика",
        criteria: "Расчетная задача",
      },
      {
        id: 30,
        type: "detailed",
        maxScore: 4,
        description: "Молекулярная физика",
        criteria: "Расчетная задача",
      },
    ],
  },
];

const mockStudents = [
  { id: 1, name: "Иванов Иван", number: "1234567890" },
  { id: 2, name: "Петрова Анна", number: "0987654321" },
  { id: 3, name: "Сидоров Петр", number: "1122334455" },
];

// Student exam registrations
const mockStudentExamRegistrations = [
  { studentId: 1, examId: 1, registered: true },
  { studentId: 1, examId: 2, registered: true },
  { studentId: 2, examId: 1, registered: true },
  { studentId: 3, examId: 3, registered: true },
];

// Individual task scores
const mockTaskScores = [
  // Student 1, Exam 1 (Math)
  { studentId: 1, examId: 1, taskId: 1, score: 1 },
  { studentId: 1, examId: 1, taskId: 2, score: 1 },
  { studentId: 1, examId: 1, taskId: 3, score: 1 },
  { studentId: 1, examId: 1, taskId: 4, score: 1 },
  { studentId: 1, examId: 1, taskId: 5, score: 0 },
  { studentId: 1, examId: 1, taskId: 6, score: 1 },
  { studentId: 1, examId: 1, taskId: 7, score: 1 },
  { studentId: 1, examId: 1, taskId: 8, score: 1 },
  { studentId: 1, examId: 1, taskId: 9, score: 1 },
  { studentId: 1, examId: 1, taskId: 10, score: 1 },
  { studentId: 1, examId: 1, taskId: 11, score: 1 },
  { studentId: 1, examId: 1, taskId: 12, score: 1 },
  { studentId: 1, examId: 1, taskId: 13, score: 2 },
  { studentId: 1, examId: 1, taskId: 14, score: 1 },
  { studentId: 1, examId: 1, taskId: 15, score: 2 },
  { studentId: 1, examId: 1, taskId: 16, score: 0 },
  { studentId: 1, examId: 1, taskId: 17, score: 2 },
  { studentId: 1, examId: 1, taskId: 18, score: 0 },

  // Student 1, Exam 2 (Russian)
  { studentId: 1, examId: 2, taskId: 1, score: 1 },
  { studentId: 1, examId: 2, taskId: 2, score: 1 },
  { studentId: 1, examId: 2, taskId: 3, score: 1 },
  { studentId: 1, examId: 2, taskId: 4, score: 1 },
  { studentId: 1, examId: 2, taskId: 5, score: 1 },
  { studentId: 1, examId: 2, taskId: 27, score: 23 },

  // Student 3, Exam 3 (Physics) - failed
  { studentId: 3, examId: 3, taskId: 1, score: 0 },
  { studentId: 3, examId: 3, taskId: 2, score: 1 },
  { studentId: 3, examId: 3, taskId: 3, score: 1 },
  { studentId: 3, examId: 3, taskId: 25, score: 0 },
  { studentId: 3, examId: 3, taskId: 26, score: 1 },
  { studentId: 3, examId: 3, taskId: 27, score: 0 },
  { studentId: 3, examId: 3, taskId: 28, score: 1 },
  { studentId: 3, examId: 3, taskId: 29, score: 0 },
  { studentId: 3, examId: 3, taskId: 30, score: 0 },
];

const mockAppeals = [
  {
    id: 1,
    studentId: 3,
    examId: 3,
    date: "2024-06-10",
    status: "pending",
    reason: "Считаю, что задание 25 решено верно",
  },
];

const Index = () => {
  const [userType, setUserType] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginNumber, setLoginNumber] = useState("");
  const [loginSurname, setLoginSurname] = useState("");
  const [adminLogin, setAdminLogin] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [selectedExam, setSelectedExam] = useState(null);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [showAdminDialog, setShowAdminDialog] = useState(false);

  // Admin states
  const [exams, setExams] = useState(mockExams);
  const [students, setStudents] = useState(mockStudents);
  const [studentExamRegistrations, setStudentExamRegistrations] = useState(
    mockStudentExamRegistrations,
  );
  const [taskScores, setTaskScores] = useState(mockTaskScores);
  const [appeals, setAppeals] = useState(mockAppeals);

  // Dialog states
  const [showCreateExamDialog, setShowCreateExamDialog] = useState(false);
  const [showCreateStudentDialog, setShowCreateStudentDialog] = useState(false);
  const [showRegisterDialog, setShowRegisterDialog] = useState(false);
  const [showScoreDialog, setShowScoreDialog] = useState(false);
  const [showScaleDialog, setShowScaleDialog] = useState(false);

  // Form states
  const [newExam, setNewExam] = useState({ name: "", date: "", minScore: "" });
  const [newStudent, setNewStudent] = useState({ name: "", number: "" });
  const [selectedExamForEdit, setSelectedExamForEdit] = useState(null);
  const [selectedStudentForScoring, setSelectedStudentForScoring] =
    useState(null);
  const [selectedExamForScoring, setSelectedExamForScoring] = useState(null);
  const [newTask, setNewTask] = useState({
    type: "test",
    maxScore: 1,
    description: "",
    criteria: "",
  });

  const handleStudentLogin = () => {
    if (loginNumber.length === 10 && loginSurname.trim()) {
      const student = students.find(
        (s) =>
          s.number === loginNumber &&
          s.name.toLowerCase().includes(loginSurname.toLowerCase()),
      );
      if (student) {
        setCurrentStudent(student);
        setIsAuthenticated(true);
        setUserType("student");
      }
    }
  };

  const handleAdminLogin = () => {
    if (adminLogin === "admin" && adminPassword === "admin123") {
      setIsAuthenticated(true);
      setUserType("admin");
      setShowAdminDialog(false);
    }
  };

  const calculatePrimaryScore = (studentId, examId) => {
    const studentTaskScores = taskScores.filter(
      (ts) => ts.studentId === studentId && ts.examId === examId,
    );
    return studentTaskScores.reduce((sum, ts) => sum + ts.score, 0);
  };

  const convertToSecondaryScore = (primaryScore, examId) => {
    const exam = exams.find((e) => e.id === examId);
    if (!exam || !exam.scaleTable) return 0;
    return exam.scaleTable[primaryScore] || 0;
  };

  const getStudentExamResult = (studentId, examId) => {
    const isRegistered = studentExamRegistrations.some(
      (reg) =>
        reg.studentId === studentId && reg.examId === examId && reg.registered,
    );
    if (!isRegistered) return null;

    const primaryScore = calculatePrimaryScore(studentId, examId);
    const secondaryScore = convertToSecondaryScore(primaryScore, examId);
    const exam = exams.find((e) => e.id === examId);
    const passed = secondaryScore >= exam.minScore;

    return { primaryScore, secondaryScore, passed };
  };

  const getStudentExams = (studentId) => {
    return studentExamRegistrations
      .filter((reg) => reg.studentId === studentId && reg.registered)
      .map((reg) => {
        const exam = exams.find((e) => e.id === reg.examId);
        const result = getStudentExamResult(studentId, reg.examId);
        const appeal = appeals.find(
          (a) => a.studentId === studentId && a.examId === reg.examId,
        );
        return { ...exam, result, appeal };
      });
  };

  const handleExamClick = (exam) => {
    setSelectedExam(exam);
  };

  const handleAppeal = (examId, reason) => {
    const newAppeal = {
      id: appeals.length + 1,
      studentId: currentStudent.id,
      examId: examId,
      date: new Date().toISOString().split("T")[0],
      status: "pending",
      reason: reason,
    };
    setAppeals([...appeals, newAppeal]);
  };

  const handleCreateExam = () => {
    if (newExam.name && newExam.date && newExam.minScore) {
      const exam = {
        id: exams.length + 1,
        name: newExam.name,
        date: newExam.date,
        minScore: parseInt(newExam.minScore),
        scaleTable: {},
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
    if (selectedExamForEdit && newTask.type && newTask.description) {
      const task = {
        id: selectedExamForEdit.tasks.length + 1,
        type: newTask.type,
        maxScore: parseInt(newTask.maxScore),
        description: newTask.description,
        criteria: newTask.criteria,
      };
      const updatedExams = exams.map((exam) => {
        if (exam.id === selectedExamForEdit.id) {
          return { ...exam, tasks: [...exam.tasks, task] };
        }
        return exam;
      });
      setExams(updatedExams);
      setSelectedExamForEdit(
        updatedExams.find((e) => e.id === selectedExamForEdit.id),
      );
      setNewTask({ type: "test", maxScore: 1, description: "", criteria: "" });
    }
  };

  const handleRegisterStudent = (studentId, examId, registered) => {
    const existingReg = studentExamRegistrations.find(
      (reg) => reg.studentId === studentId && reg.examId === examId,
    );
    if (existingReg) {
      setStudentExamRegistrations((prev) =>
        prev.map((reg) =>
          reg.studentId === studentId && reg.examId === examId
            ? { ...reg, registered }
            : reg,
        ),
      );
    } else {
      setStudentExamRegistrations((prev) => [
        ...prev,
        { studentId, examId, registered },
      ]);
    }
  };

  const handleTaskScoreChange = (studentId, examId, taskId, score) => {
    const existingScore = taskScores.find(
      (ts) =>
        ts.studentId === studentId &&
        ts.examId === examId &&
        ts.taskId === taskId,
    );
    if (existingScore) {
      setTaskScores((prev) =>
        prev.map((ts) =>
          ts.studentId === studentId &&
          ts.examId === examId &&
          ts.taskId === taskId
            ? { ...ts, score: parseInt(score) }
            : ts,
        ),
      );
    } else {
      setTaskScores((prev) => [
        ...prev,
        { studentId, examId, taskId, score: parseInt(score) },
      ]);
    }
  };

  const handleAppealAction = (appealId, action) => {
    setAppeals((prev) =>
      prev.map((appeal) =>
        appeal.id === appealId ? { ...appeal, status: action } : appeal,
      ),
    );
  };

  const getPendingAppealsCount = () => {
    return appeals.filter((appeal) => appeal.status === "pending").length;
  };

  if (!userType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="w-full">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Icon name="GraduationCap" className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Портал ЕГЭ
              </CardTitle>
              <CardDescription>Личный кабинет учащегося</CardDescription>
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
                Войти
              </Button>
            </CardContent>
          </Card>

          <div className="mt-4 text-center">
            <Dialog open={showAdminDialog} onOpenChange={setShowAdminDialog}>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Icon name="Settings" className="w-4 h-4 mr-2" />
                  Вход для администратора
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Вход администратора</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="adminLogin">Логин</Label>
                    <Input
                      id="adminLogin"
                      type="text"
                      placeholder="admin"
                      value={adminLogin}
                      onChange={(e) => setAdminLogin(e.target.value)}
                      className="text-center"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="adminPassword">Пароль</Label>
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
                    disabled={!adminLogin || !adminPassword}
                  >
                    Войти в админ-панель
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    );
  }

  // Admin Panel
  if (userType === "admin") {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 py-4">
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
              <div className="flex items-center space-x-4">
                <Badge variant="outline" className="text-orange-600">
                  Аппеляций: {getPendingAppealsCount()}
                </Badge>
                <Button
                  variant="outline"
                  onClick={() => {
                    setUserType(null);
                    setIsAuthenticated(false);
                    setAdminLogin("");
                    setAdminPassword("");
                  }}
                >
                  <Icon name="LogOut" className="w-4 h-4 mr-2" />
                  Выход
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8">
          <Tabs defaultValue="exams" className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="exams">Экзамены</TabsTrigger>
              <TabsTrigger value="students">Учащиеся</TabsTrigger>
              <TabsTrigger value="registration">Регистрация</TabsTrigger>
              <TabsTrigger value="scores">Баллы</TabsTrigger>
              <TabsTrigger value="scale">Шкала</TabsTrigger>
              <TabsTrigger value="appeals">Аппеляции</TabsTrigger>
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
                    className="hover:shadow-md transition-shadow"
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
                                <Label htmlFor="taskDescription">
                                  Описание задания
                                </Label>
                                <Input
                                  id="taskDescription"
                                  placeholder="Кинематика"
                                  value={newTask.description}
                                  onChange={(e) =>
                                    setNewTask({
                                      ...newTask,
                                      description: e.target.value,
                                    })
                                  }
                                />
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
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-sm font-medium text-blue-600">
                                  {task.id}
                                </span>
                              </div>
                              <div>
                                <div className="font-medium">
                                  {task.description}
                                </div>
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
                      <div className="space-y-2">
                        <div className="text-sm">
                          Экзаменов зарегистрировано:{" "}
                          {
                            studentExamRegistrations.filter(
                              (reg) =>
                                reg.studentId === student.id && reg.registered,
                            ).length
                          }
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="registration" className="space-y-6">
              <h2 className="text-2xl font-bold">
                Регистрация участников на экзамены
              </h2>
              <Card>
                <CardHeader>
                  <CardTitle>Регистрация учащихся</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Учащийся</TableHead>
                        {exams.map((exam) => (
                          <TableHead key={exam.id}>{exam.name}</TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {students.map((student) => (
                        <TableRow key={student.id}>
                          <TableCell className="font-medium">
                            {student.name}
                          </TableCell>
                          {exams.map((exam) => {
                            const isRegistered = studentExamRegistrations.some(
                              (reg) =>
                                reg.studentId === student.id &&
                                reg.examId === exam.id &&
                                reg.registered,
                            );
                            return (
                              <TableCell key={exam.id}>
                                <Checkbox
                                  checked={isRegistered}
                                  onCheckedChange={(checked) =>
                                    handleRegisterStudent(
                                      student.id,
                                      exam.id,
                                      checked,
                                    )
                                  }
                                />
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="scores" className="space-y-6">
              <h2 className="text-2xl font-bold">Ввод баллов за задания</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Выберите учащегося</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select
                      value={selectedStudentForScoring?.id?.toString() || ""}
                      onValueChange={(value) =>
                        setSelectedStudentForScoring(
                          students.find((s) => s.id === parseInt(value)),
                        )
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите учащегося" />
                      </SelectTrigger>
                      <SelectContent>
                        {students.map((student) => (
                          <SelectItem
                            key={student.id}
                            value={student.id.toString()}
                          >
                            {student.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Выберите экзамен</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select
                      value={selectedExamForScoring?.id?.toString() || ""}
                      onValueChange={(value) =>
                        setSelectedExamForScoring(
                          exams.find((e) => e.id === parseInt(value)),
                        )
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите экзамен" />
                      </SelectTrigger>
                      <SelectContent>
                        {exams.map((exam) => (
                          <SelectItem key={exam.id} value={exam.id.toString()}>
                            {exam.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>
              </div>

              {selectedStudentForScoring && selectedExamForScoring && (
                <Card>
                  <CardHeader>
                    <CardTitle>
                      Баллы: {selectedStudentForScoring.name} -{" "}
                      {selectedExamForScoring.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label>
                            Первичный балл:{" "}
                            {calculatePrimaryScore(
                              selectedStudentForScoring.id,
                              selectedExamForScoring.id,
                            )}
                          </Label>
                        </div>
                        <div>
                          <Label>
                            Тестовый балл:{" "}
                            {convertToSecondaryScore(
                              calculatePrimaryScore(
                                selectedStudentForScoring.id,
                                selectedExamForScoring.id,
                              ),
                              selectedExamForScoring.id,
                            )}
                          </Label>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {selectedExamForScoring.tasks.map((task) => {
                          const currentScore =
                            taskScores.find(
                              (ts) =>
                                ts.studentId === selectedStudentForScoring.id &&
                                ts.examId === selectedExamForScoring.id &&
                                ts.taskId === task.id,
                            )?.score || 0;

                          return (
                            <div
                              key={task.id}
                              className="flex items-center justify-between p-3 bg-gray-50 rounded"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                  <span className="text-sm font-medium text-blue-600">
                                    {task.id}
                                  </span>
                                </div>
                                <div>
                                  <div className="font-medium">
                                    {task.description}
                                  </div>
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
                              <div className="flex items-center space-x-2">
                                <Input
                                  type="number"
                                  min="0"
                                  max={task.maxScore}
                                  value={currentScore}
                                  onChange={(e) =>
                                    handleTaskScoreChange(
                                      selectedStudentForScoring.id,
                                      selectedExamForScoring.id,
                                      task.id,
                                      e.target.value,
                                    )
                                  }
                                  className="w-16"
                                />
                                <span className="text-sm text-gray-600">
                                  / {task.maxScore}
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="scale" className="space-y-6">
              <h2 className="text-2xl font-bold">Таблица перевода баллов</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exams.map((exam) => (
                  <Card key={exam.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{exam.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        <div className="grid grid-cols-2 gap-2 text-sm font-medium">
                          <div>Первичный</div>
                          <div>Тестовый</div>
                        </div>
                        {exam.scaleTable &&
                          Object.entries(exam.scaleTable).map(
                            ([primary, secondary]) => (
                              <div
                                key={primary}
                                className="grid grid-cols-2 gap-2 text-sm"
                              >
                                <div>{primary}</div>
                                <div>{secondary}</div>
                              </div>
                            ),
                          )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="appeals" className="space-y-6">
              <h2 className="text-2xl font-bold">Аппеляции</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Поданные аппеляции</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Учащийся</TableHead>
                        <TableHead>Экзамен</TableHead>
                        <TableHead>Дата подачи</TableHead>
                        <TableHead>Причина</TableHead>
                        <TableHead>Статус</TableHead>
                        <TableHead>Действия</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {appeals.map((appeal) => {
                        const student = students.find(
                          (s) => s.id === appeal.studentId,
                        );
                        const exam = exams.find((e) => e.id === appeal.examId);
                        return (
                          <TableRow key={appeal.id}>
                            <TableCell>{student?.name}</TableCell>
                            <TableCell>{exam?.name}</TableCell>
                            <TableCell>{appeal.date}</TableCell>
                            <TableCell className="max-w-xs truncate">
                              {appeal.reason}
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  appeal.status === "pending"
                                    ? "secondary"
                                    : appeal.status === "approved"
                                      ? "default"
                                      : "destructive"
                                }
                              >
                                {appeal.status === "pending"
                                  ? "На рассмотрении"
                                  : appeal.status === "approved"
                                    ? "Принята"
                                    : "Отклонена"}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              {appeal.status === "pending" && (
                                <div className="flex space-x-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="text-green-600"
                                    onClick={() =>
                                      handleAppealAction(appeal.id, "approved")
                                    }
                                  >
                                    Принять
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="text-red-600"
                                    onClick={() =>
                                      handleAppealAction(appeal.id, "rejected")
                                    }
                                  >
                                    Отклонить
                                  </Button>
                                </div>
                              )}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    );
  }

  // Student Portal
  const studentExams = getStudentExams(currentStudent.id);

  if (selectedExam) {
    const studentTaskScores = taskScores.filter(
      (ts) =>
        ts.studentId === currentStudent.id && ts.examId === selectedExam.id,
    );
    const appeal = appeals.find(
      (a) => a.studentId === currentStudent.id && a.examId === selectedExam.id,
    );

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
                    {selectedExam.tasks.map((task) => {
                      const taskScore = studentTaskScores.find(
                        (ts) => ts.taskId === task.id,
                      );
                      return (
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
                              <p className="font-medium">{task.description}</p>
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
                                  {task.criteria}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge
                              variant={
                                taskScore?.score === task.maxScore
                                  ? "default"
                                  : "destructive"
                              }
                            >
                              {taskScore?.score || 0} / {task.maxScore}
                            </Badge>
                          </div>
                        </div>
                      );
                    })}
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
                      {selectedExam.result?.secondaryScore || 0}
                    </div>
                    <p className="text-gray-600">из 100 баллов</p>
                    <p className="text-sm text-gray-500">
                      Первичный балл: {selectedExam.result?.primaryScore || 0}
                    </p>
                    <Badge
                      variant={
                        selectedExam.result?.passed ? "default" : "destructive"
                      }
                      className="text-sm"
                    >
                      {selectedExam.result?.passed
                        ? "Экзамен сдан"
                        : "Экзамен не сдан"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Аппеляция</CardTitle>
                </CardHeader>
                <CardContent>
                  {appeal ? (
                    <div className="space-y-2">
                      <Badge
                        variant={
                          appeal.status === "pending"
                            ? "secondary"
                            : appeal.status === "approved"
                              ? "default"
                              : "destructive"
                        }
                        className="w-full justify-center"
                      >
                        {appeal.status === "pending"
                          ? "Аппеляция на рассмотрении"
                          : appeal.status === "approved"
                            ? "Аппеляция принята"
                            : "Аппеляция отклонена"}
                      </Badge>
                      <p className="text-sm text-gray-600">
                        Дата подачи: {appeal.date}
                      </p>
                      <p className="text-sm text-gray-600">
                        Причина: {appeal.reason}
                      </p>
                    </div>
                  ) : (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full bg-orange-600 hover:bg-orange-700">
                          <Icon name="AlertTriangle" className="w-4 h-4 mr-2" />
                          Подать аппеляцию
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Подача аппеляции</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="appealReason">
                              Причина аппеляции
                            </Label>
                            <Textarea
                              id="appealReason"
                              placeholder="Укажите причину подачи аппеляции..."
                              onChange={(e) => {
                                if (e.target.value.trim()) {
                                  handleAppeal(selectedExam.id, e.target.value);
                                }
                              }}
                            />
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
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
                <p className="text-sm text-gray-600">
                  Личный кабинет: {currentStudent.name}
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setUserType(null);
                setIsAuthenticated(false);
                setCurrentStudent(null);
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
              {studentExams.map((exam) => (
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
                        {exam.result ? exam.result.secondaryScore : "—"}
                      </div>
                      <div className="flex flex-col items-end space-y-1">
                        {exam.result ? (
                          <Badge
                            variant={
                              exam.result.passed ? "default" : "destructive"
                            }
                          >
                            {exam.result.passed ? "Сдан" : "Не сдан"}
                          </Badge>
                        ) : (
                          <Badge variant="outline">Результата нет</Badge>
                        )}
                        {exam.appeal && (
                          <Badge
                            variant={
                              exam.appeal.status === "pending"
                                ? "secondary"
                                : exam.appeal.status === "approved"
                                  ? "default"
                                  : "destructive"
                            }
                            className="text-xs"
                          >
                            {exam.appeal.status === "pending"
                              ? "Аппеляция подана"
                              : exam.appeal.status === "approved"
                                ? "Аппеляция принята"
                                : "Аппеляция отклонена"}
                          </Badge>
                        )}
                      </div>
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
                  <div className="text-2xl font-bold">
                    {studentExams.length}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Сдано</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">
                    {studentExams.filter((exam) => exam.result?.passed).length}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Не сдано
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">
                    {
                      studentExams.filter(
                        (exam) => exam.result && !exam.result.passed,
                      ).length
                    }
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Средний балл
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {studentExams.filter((exam) => exam.result).length > 0
                      ? Math.round(
                          studentExams
                            .filter((exam) => exam.result)
                            .reduce(
                              (sum, exam) => sum + exam.result.secondaryScore,
                              0,
                            ) /
                            studentExams.filter((exam) => exam.result).length,
                        )
                      : "—"}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Распределение баллов</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentExams.map((exam) => (
                    <div key={exam.id} className="flex items-center space-x-4">
                      <div className="w-32 text-sm font-medium truncate">
                        {exam.name}
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${exam.result?.passed ? "bg-green-500" : "bg-red-500"}`}
                          style={{
                            width: `${exam.result?.secondaryScore || 0}%`,
                          }}
                        ></div>
                      </div>
                      <div className="text-sm font-medium w-12 text-right">
                        {exam.result?.secondaryScore || "—"}
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
