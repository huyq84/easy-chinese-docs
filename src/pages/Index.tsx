
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Rocket, Heart, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            huyq的个人网站
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            前端开发工程师 / UI设计师 / 开源爱好者
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700">联系我</Button>
            <Button variant="outline" className="border-blue-600 text-blue-400">
              查看作品
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          <Card className="bg-white/10 backdrop-blur-lg border-0 hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 text-center">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-bold mb-2">专业技能</h3>
              <p className="text-gray-300">精通前端开发技术栈</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-0 hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 text-center">
              <Rocket className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-2">项目经验</h3>
              <p className="text-gray-300">参与多个大型项目开发</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-0 hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-red-400" />
              <h3 className="text-xl font-bold mb-2">开源贡献</h3>
              <p className="text-gray-300">活跃的开源社区贡献者</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-0 hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 text-center">
              <Star className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-2">获奖经历</h3>
              <p className="text-gray-300">多个技术竞赛获奖</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-4 left-0 w-full text-center text-gray-400 text-sm">
        © 2024 huyq的个人网站 | 用❤️制作
      </footer>
    </div>
  );
};

export default Index;
