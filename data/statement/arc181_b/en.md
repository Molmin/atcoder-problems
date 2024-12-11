Score : $600$ points

## Problem Statement

For strings $S$ and $T$ consisting of lowercase English letters, and a string $X$ consisting of `0` and `1`, define the string $f(S,T,X)$ consisting of lowercase English letters as follows:

- Starting with an empty string, for each $i=1,2,\dots,|X|$, append $S$ to the end if the $i$-th character of $X$ is `0`, and append $T$ to the end if it is `1`.

You are given a string $S$ consisting of lowercase English letters, and strings $X$ and $Y$ consisting of `0` and `1`.

Determine if there exists a string $T$ (which can be empty) such that $f(S,T,X)=f(S,T,Y)$.

You have $t$ test cases to solve.

## Constraints

- $1 \leq t \leq 5 \times 10^5$
- $1 \leq |S| \leq 5\times 10^5$
- $1 \leq |X|,|Y| \leq 5\times 10^5$
- $S$ is a string consisting of lowercase English letters.
- $X$ and $Y$ are strings consisting of `0` and `1`.
- The sum of $|S|$ across all test cases in a single input is at most $5 \times 10^5$.
- The sum of $|X|$ across all test cases in a single input is at most $5 \times 10^5$.
- The sum of $|Y|$ across all test cases in a single input is at most $5 \times 10^5$.

## Input

The input is given from Standard Input in the following format:

> $t$
> 
> $\mathrm{case}_1$
> 
> $\vdots$
> 
> $\mathrm{case}_t$

Each case is given in the following format:

> $S$
> 
> $X$
> 
> $Y$

## Output

Print $t$ lines. The $i$-th line should contain `Yes` if there exists a $T$ that satisfies the condition for the $i$-th test case, and `No` otherwise.

```input1
3
araara
01
111
araaaa
100100
0010111
abacabac
0
1111
```

```output1
Yes
No
No
```

Below, string concatenation is represented using $+$.

For the 1st test case, if $T=$`ara`, then $f(S,T,X)=S+T=$`araaraara` and $f(S,T,Y)=T+T+T=$`araaraara`, so $f(S,T,X)=f(S,T,Y)$.

For the 2nd and 3rd test cases, there is no $T$ that satisfies the condition.

```input2
2
empty
10101
00
empty
11111
111
```

```output2
Yes
Yes
```

$T$ can be empty.