/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getBlogPosts, getJSONData } from "@/lib/serverUtils";
import Link from "next/link";
import {
  EnvelopeClosedIcon,
  FileTextIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import { Avatar } from "@/components/ui/avatar";
import Image from "next/image";

export default async function Home() {
  const data = await getJSONData();
  const posts = await getBlogPosts();

  return (
    <main>
      {/* Banner Section */}
      <section
        id="home"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="w-1/2 mx-auto lg:w-1/3">
            <Image
              src="/assets/profile.png"
              width={280}
              height={280}
              alt="Carl Wilson U. Ricafort"
              className="mx-auto aspect-square overflow-hidden object-cover object-center rounded-full [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
            />
            <p className="mt-3 text-center text-base md:text-lg font-medium text-muted-foreground">
              Web Developer • Systems &amp; Game Builder
            </p>
          </div>
          <div className="w-full lg:w-2/3 space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter md:whitespace-nowrap md:text-5xl">
                Carl Wilson U. Ricafort
              </h1>
            </div>
            <div className="max-w-[600px] space-y-4 lg:text-lg text-gray-500 dark:text-gray-400">
              <p>
                Code gets a feature running, but structured testing is what
                makes people trust it.
              </p>
              <p>
                Building clean web apps takes speed; catching edge cases takes
                discipline. I bring both to the table.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/resume.pdf" prefetch={false}>
                <span className="inline-flex items-center gap-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground">
                  <FileTextIcon className="h-5 w-5" />
                  Resume
                </span>
              </Link>
              <Link href={data.contactInfo.github} prefetch={false}>
                <span className="inline-flex items-center gap-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground">
                  <GitHubLogoIcon className="h-5 w-5" />
                  GitHub
                </span>
              </Link>
              <Link href={data.contactInfo.linkedin} prefetch={false}>
                <span className="inline-flex items-center gap-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground">
                  <LinkedInLogoIcon className="h-5 w-5" />
                  LinkedIn
                </span>
              </Link>
              <Link href={`mailto:${data.contactInfo.email}`}>
                <span className="inline-flex items-center gap-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground">
                  <EnvelopeClosedIcon className="h-5 w-5" />
                  Email
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">
          Achievements & Certifications
        </h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
          {data.workExperience.map((exp) => (
            <div key={exp.id} className="grid gap-1 relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

              <h4 className="text-xl font-medium">
                {exp.role} @
                {exp.companyWebsite ? (
                  <Link href={exp.companyWebsite} className="ml-2 text-primary">
                    {exp.company}
                  </Link>
                ) : (
                  <span className="ml-2">{exp.company}</span>
                )}
              </h4>
              <div className="text-gray-500 dark:text-gray-400">
                {exp.startDate}
                {exp.endDate && ` - ${exp.endDate}`}
              </div>
              <div className="mt-2">
                <h6 className="font-medium">Details:</h6>
                <ul className="text-gray-500 text-sm list-disc pl-4">
                  {exp.keyResponsibilities.map((resp) => (
                    <li key={resp}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">My Projects</h2>
        <div className="grid grid-cols-1 gap-4 lg:gap-6">
          {data.projects.map((project) => (
            <Card key={project.title} className="flex flex-col lg:flex-row">
              {project.cover && (
                <div className="w-full lg:w-1/3 p-2 flex items-center">
                  <Image
                    src={project.cover}
                    alt={`${project.title} cover`}
                    height={200}
                    width={300}
                    className="rounded-md object-cover"
                  />
                </div>
              )}

              <div className="w-full lg:w-2/3">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <div className="flex space-x-3">
                    {project.live_url && (
                      <Link href={project.live_url} prefetch={false}>
                        <Button size="sm">
                          <GlobeIcon className="h-3 w-3 mr-2" />
                          Live Demo
                        </Button>
                      </Link>
                    )}
                    {project.code_repo_url && (
                      <Link href={project.code_repo_url} prefetch={false}>
                        <Button size="sm" variant="outline">
                          <GitHubLogoIcon className="h-3 w-3 mr-2" />
                          Open Repository
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
      >
        <h2 className="font-bold text-3xl md:text-5xl mb-12">Education</h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
          {data.education.map((ed) => (
            <div key={ed.id} className="grid gap-1 relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

              <h4 className="text-xl font-medium">{ed.degree}</h4>
              <h5 className="font-medium">{ed.institution}</h5>
              <div className="text-gray-500 dark:text-gray-400">
                {ed.startDate} - {ed.endDate}
              </div>
              <p className="mt-2 text-sm text-gray-500">{ed.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      {data.testimonials.length > 0 && (
        <section
          id="testimonials"
          className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
        >
          <h2 className="font-bold text-3xl md:text-5xl mb-12">Testimonials</h2>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {data.testimonials.map((t) => (
              <Card className="p-6 text-left" key={t.id}>
                <blockquote className="font-medium lg:text-og">
                  &ldquo;{t.feedback}.&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <Avatar>
                    <Image
                      height={50}
                      width={50}
                      alt="testimonial avatar"
                      src={t.avatar}
                    />
                  </Avatar>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {t.title} @ {t.company}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Blogs Section */}
      {posts.length > 0 && (
        <section
          id="blogs"
          className="container max-w-5xl mx-auto py-12 md:py-16 lg:py-20"
        >
          <h2 className="font-bold text-3xl md:text-5xl mb-12">Blogs</h2>

          <div className="flex flex-col space-y-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blogs/${post.slug}`}>
                <h3 className="text-xl md:text-3xl font-semibold">
                  {post.title}
                </h3>
                <p className="md:text-lg font-light">{post.description}</p>
                <p className="text-sm font-medium text-gray-500 mt-2">
                  Published at: {post.publishDate}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
