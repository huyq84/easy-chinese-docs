import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Background Music Section */}
        <div className="mb-12 fixed bottom-16 right-4 z-50">
          <audio controls loop className="rounded-lg shadow-lg">
            <source src="/smile.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* Nature Image Carousel */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            大自然的美景
          </h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                  alt="山林中的鹿"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="https://images.unsplash.com/photo-1433086966358-54859d0ed716"
                  alt="山间瀑布"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
                  alt="松林"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843"
                  alt="阳光林间"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Inspirational Article */}
        <Card className="bg-white/10 backdrop-blur-lg border-0 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              追逐梦想的力量
            </h2>
            <article className="prose prose-invert max-w-none">
              <p className="mb-4 text-lg leading-relaxed">
                生命就像一场旅行，每个人都在追寻着自己的梦想。有时候，我们会遇到困难和挫折，但这些都是成长的必经之路。就像春天的种子需要经历风雨的洗礼才能破土而出，我们也需要经历生活的磨练才能绽放光彩。
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                记住，失败不是终点，而是新的起点。每一次跌倒都是为了更好地站起来，每一次挫折都是为了让我们变得更强大。生活中没有白走的路，每一步都是向着梦想靠近的过程。
              </p>
              <p className="text-lg leading-relaxed">
                让我们保持微笑，保持希望，因为明天会更好。生命的美好就在于我们永不放弃的心，就在于我们对梦想的执着追求。让我们一起努力，创造属于自己的精彩人生！
              </p>
            </article>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-4 left-0 w-full text-center text-gray-400 text-sm">
        © 2025 huyq的个人网站 | 用❤️制作
      </footer>
    </div>
  );
};

export default Index;
