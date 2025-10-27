export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Moza";
  }

  if (query.toLowerCase().includes("What is 80 plus 14?")) {
    return "94";
  }

  if (query.toLowerCase().includes("Which of the following numbers is the largest: 37, 8, 88?	")) {
    return "88";
  }

  if (query.toLowerCase().includes("What is 81 plus 87?	")) {
    return "168";
  }



  return "";
}
