Score : $500$ points

## Problem Statement

You are given a string $S$ consisting of digits and positive integers $L$ and $R$ for each of $T$ test cases. Solve the following problem.

For a positive integer $x$, let us define $f(x)$ as the number of contiguous substrings of the decimal representation of $x$ (without leading zeros) that equal $S$.

For instance, if $S=$ `22`, we have $f(122) = 1$, $f(123) = 0$, $f(226) = 1$, and $f(222) = 2$.

Find $\displaystyle \sum_{k=L}^{R} f(k)$.

## Constraints

- $1 \le T \le 1000$
- $S$ is a string consisting of digits whose length is between $1$ and $16$, inclusive.
- $L$ and $R$ are integers satisfying $1 \le L \le R &lt; 10^{16}$.

## Input

The input is given from Standard Input in the following format, where $\rm{case}_i$ denotes the $i$-th test case:

> $T$
> 
> $\rm{case}_{1}$
> 
> $\rm{case}_{2}$
> 
> $\vdots$
> 
> $\rm{case}_{\it{T}}$

Each test case is in the following format:

> $S$ $L$ $R$

## Output

Print $T$ lines in total.<br>
The $i$-th line should contain an integer representing the answer to the $i$-th test case.

```input1
6
22 23 234
0295 295 295
0 1 9999999999999999
2718 998244353 9982443530000000
869120 1234567890123456 2345678901234567
2023032520230325 1 9999999999999999
```

```output1
12
0
14888888888888889
12982260572545
10987664021
1
```

This input contains six test cases.

- In the first test case, $S=$ `22`, $L=23$, $R=234$.-   - $f(122)=f(220)=f(221)=f(223)=f(224)=\dots=f(229)=1$.
-   - $f(222)=2$.
-   - Thus, the answer is $12$.
- In the second test case, $S=$ `0295`, $L=295$, $R=295$.-   - Note that $f(295)=0$.