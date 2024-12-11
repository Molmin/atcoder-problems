Score : $1000$ points

## Problem Statement

**This problem is output-only.** 

We have a programming language equipped with the following operations of unsigned 64-bit integers: addition, multiplication, and a modulo operation where the divisor is $998244353$.<br>
Write a program that performs multiplication modulo $1000000007$ in this language.

More formally, write a program that receives integers $a$ and $b$ between $0$ and $1000000006$ and computes $a \times b \bmod{1000000007}$ under the following **Specification** and **Format**.

## Specification

The program can handle $26$ **variables** represented by uppercase English letters: $A, B, \dots, Z$.<br>
Each variable can hold an integer value between $0$ and $2^{64}-1$ (inclusive). Below, such a value is called **unsigned 64-bit integer**.<br>
At the start of the execution of the program, $A$ is assigned an integer $a$, $B$ is assigned an integer $b$, and the other variables are assigned $0$.<br>
At the end of the execution, $C$ must hold $a \times b \bmod{1000000007}$.

## Format

The $1$-st line of the program contains an integer $N$ $(1 \leq N \leq 100)$ representing the number of instructions in the program.<br>
The $2$-nd through $(N + 1)$-th lines contain $N$ instructions. The instructions are executed one by one from top to bottom.<br>
Each instruction is in one of the following three forms.

- `add x y z`-   - Assign $(y + z) \bmod{2^{64}}$ to $x$, where $x$ is a variable, and each of $y$ and $z$ is a variable or an unsigned 64-bit integer.
- `mul x y z`-   - Assign $(y \times z) \bmod{2^{64}}$ to $x$, where $x$ is a variable, and each of $y$ and $z$ is a variable or an unsigned 64-bit integer.
- `rem x y`-   - Assign $y \bmod{998244353}$ to $x$, where $x$ is a variable, and $y$ is a variable or an unsigned 64-bit integer.

## Input

The input given from Standard Input is empty.

## Output

Print a program under the Specification and Format.

## Judging

If the submitted program is malformed, the verdict will be indeterminate.<br>
If the submitted program is well-formed, for each test case, the judge will execute it against $10^4$ pairs of integers $(a, b)$ $(0 \leq a, b \leq 1000000006)$ independently. (These pairs are prepared beforehand and constant for each test case.)<br>
If the variable $C$ holds $a \times b \bmod{1000000007}$ at the end of the execution for all pairs $(a, b)$, the verdict will be `AC`; otherwise, it will be `WA`.

## Sample Output

Here is an example of a well-formed program. (The Specification is not satisfied, so it will be judged as `WA` if submitted.)

> 5
> 
> mul C A B
> 
> rem C C
> 
> add A A 10
> 
> add D 2 B
> 
> add E 1 0

At the end of the execution of this program, the variables will hold the following values.

- $A$: $a + 10$
- $B$: $b$
- $C$: $a \times b \bmod{998244353}$
- $D$: $b + 2$
- $E$: $1$
- The others: $0$