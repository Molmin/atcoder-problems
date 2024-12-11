Score : $600$ points

## Problem Statement

Takahashi has decided to put a web counter on his webpage.<br>
The accesses to his webpage are described as follows:

- For $i=0,1,2,\ldots,23$, there is a possible access at $i$ o'clock every day:-   - If $c_i=$`T`, Takahashi accesses the webpage with a probability of $X$ percent.
-   - If $c_i=$`A`, Aoki accesses the webpage with a probability of $Y$ percent.
-   - Whether or not Takahashi or Aoki accesses the webpage is determined independently every time.
- There is no other access.

Also, Takahashi believes it is preferable that the $N$-th access since the counter is put is not made by Takahashi himself.  

If Takahashi puts the counter **right before $0$ o'clock** of one day, find the probability, modulo $998244353$, that the $N$-th access is made by Aoki.

## Notes

We can prove that the sought probability is always a finite rational number.  Moreover, under the constraints of this problem, when the value is represented as $\frac{P}{Q}$ with two coprime integers $P$ and $Q$, we can prove that there is a unique integer $R$ such that $R \times Q \equiv P\pmod{998244353}$ and $0 \leq R \lt 998244353$.  Find this $R$.

## Constraints

- $1 \leq N \leq 10^{18}$
- $1 \leq X,Y \leq 99$
- $c_i$ is `T` or `A`.
- $N$, $X$, and $Y$ are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $X$ $Y$
> 
> $c_0 c_1 \ldots c_{23}$

## Output

Print the answer.

```input1
1 50 50
ATATATATATATATATATATATAT
```

```output1
665496236
```

The $1$-st access since Takahashi puts the web counter is made by Aoki with a probability of $\frac{2}{3}$.

```input2
271 95 1
TTTTTTTTTTTTTTTTTTTTTTTT
```

```output2
0
```

There is no access by Aoki.

```input3
10000000000000000 62 20
ATAATTATATTTAAAATATTATAT
```

```output3
744124544
```