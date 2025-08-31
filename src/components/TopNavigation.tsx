import { ChevronDown, TestTube, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { navigationItems } from '@/data/mockData';

const TopNavigation = () => {
  return (
    <nav className="h-14 bg-primary flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center space-x-8">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            className={`text-sm font-medium transition-colors ${
              item.active 
                ? 'text-primary-foreground border-b-2 border-primary-foreground pb-4 -mb-4' 
                : 'text-primary-foreground/80 hover:text-primary-foreground'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      
      <div className="flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary/80">
              <TestTube className="w-4 h-4 mr-2" />
              Test Bot
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background">
            <DropdownMenuItem>Production Bot</DropdownMenuItem>
            <DropdownMenuItem>Development Bot</DropdownMenuItem>
            <DropdownMenuItem>Staging Bot</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <div className="flex items-center space-x-2">
          <Circle className="w-2 h-2 fill-green-400 text-green-400" />
          <span className="text-primary-foreground/80 text-sm">Online</span>
        </div>
        
        <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
          AD
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;