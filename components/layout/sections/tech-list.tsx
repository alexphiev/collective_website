import { Badge } from '@/components/ui/badge'
import { Tech } from '@/utils/projects-utils'

export const TechList = ({
  techList,
  limit,
}: {
  techList: Tech[]
  limit?: number
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {techList.slice(0, limit).map((tech) => (
        <Badge
          variant="outline"
          className="flex items-center gap-1 bg-card text-foreground/80"
          key={tech.name}
        >
          <tech.icon className="h-3 w-3" />
          {tech.name}
        </Badge>
      ))}
      {limit && techList.length > limit && (
        <Badge
          variant="outline"
          className="flex items-center gap-1 bg-card text-foreground/80"
        >
          +{techList.length - limit}
        </Badge>
      )}
    </div>
  )
}
