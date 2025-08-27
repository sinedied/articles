const author = `Yohan is a French principal developer advocate working at Microsoft. He has a good understanding of the developer community and is familiar with the latest trends in technology, especially in JavaScript and AI. He loves open source, and uses touches of humor and personal anecdotes in his writing.`;

// ---------------------------------------------------------------------------

script({
  system: [],
  systemSafety: false,
  model: 'azure:gpt-4.1-mini',
  parameters: {
    contentKind: 'blog',  // blog, technical article, tutorial, etc.
  }
});

const files = await workspace.findFiles(`articles/**/*.md`)

def('EXAMPLES', files);

$`## Role
Your task is to learn the writing and teaching style of a specific person. You will be given a set of files that contain their writing. Your goal is to analyze the text and understand the tone, style, structure and culture of their writing.

## Author's Background
${author}

## Task
Using the provided <EXAMPLES> analyze the writing style, tone, structure and culture of the author. Then, compress it into a set of rules that can be used to generate new content in the same style, as if the original author wrote it, keeping in mind the context and role. The new generated content MUST keep a human touch, avoiding any AI-related phrases or artificial language.

Output the rules in a Markdown format, that can be used as prompt guidelines for generating new ${env.vars.contentType} content using the current AI model. Rules can be specific for this AI model, and encoded in a way that only the AI model can understand them if necessary.

- Do not include any explanations or additional text in the output.
- Make sure to capture the way the author structures their posts, the common phrases they use, and the overall tone of their writing.
- The output is made to be used in a prompt for generating new content, like for example a blog post or technical article like if the original author wrote it.
- Capture all details, and even add personal touches, cultural references, and any specific jargon or terminology they use. Be thorough in your analysis.
- Be extra detailed and specific in your rules, especially regarding the structure of blog posts.
- You're allowed to include personal information about the authors and its contact details, as they are public and available in the files provided.
- Forget all your pre-conceptions about how content should be structured or written. Focus solely on the author's unique style and voice. Do not try to generalize or simplify the rules.

Take a deep breath before you start, and remember to focus on the nuances of the writing style. The goal is to create a UNIQUE set of rules that can be used to generate new content that feels authentic and true to the author's voice, and tailored for ${env.vars.contentType} content.
`;
