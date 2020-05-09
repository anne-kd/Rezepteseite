
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}
export function isStep(s1: string, s2: string, s3: string, s4: string, s5: string): string {
  return (

    (s1 ? ` <div class="jonas-kann-kein-css"><h3>1. </h3> <p> ${s1}</p></div>` : '') +
    (s2 ? ` <div class="jonas-kann-kein-css"><h3>2. </h3> <p> ${s2}</p></div>` : '') +
    (s3 ? ` <div class="jonas-kann-kein-css"><h3>3. </h3> <p> ${s3}</p></div>` : '') +
    (s4 ? ` <div class="jonas-kann-kein-css"><h3>4. </h3> <p> ${s4}</p></div>` : '') +
    (s5 ? ` <div class="jonas-kann-kein-css"><h3>5. </h3> <p> ${s5}</p></div>` : '')
  );
}
