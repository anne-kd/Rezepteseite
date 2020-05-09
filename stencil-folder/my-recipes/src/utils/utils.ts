
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}
export function isStep(s1: string, s2: string, s3: string, s4: string, s5: string): string {
  return (

    (s1 ? ` <h3>1. </h3> <p> ${s1}</p>` : '') +
    (s2 ? ` <h3>2. </h3> <p> ${s2}</p>` : '') +
    (s3 ? ` <h3>3. </h3> <p> ${s3}</p>` : '') +
    (s4 ? ` <h3>4. </h3> <p> ${s4}</p>` : '') +
    (s5 ? ` <h3>5. </h3> <p> ${s5}</p>` : '')
  );
}
