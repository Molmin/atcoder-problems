Score : $500$ points

## Problem Statement

You have an integer $1$ and a die that shows integers between $1$ and $6$ (inclusive) with equal probability.<br>
You repeat the following operation while your integer is strictly less than $N$:

- Cast a die.  If it shows $x$, multiply your integer by $x$.

Find the probability, modulo $998244353$, that your integer ends up being $N$.

 How to find a probability modulo $998244353$? 
We can prove that the sought probability is always rational.  
Additionally, under the constraints of this problem, when that value is represented as $\frac{P}{Q}$ with two coprime integers $P$ and $Q$, we can prove that there is a unique integer $R$ such that $R \times Q \equiv P\pmod{998244353}$ and $0 \leq R \lt 998244353$.  Find this $R$.

## Constraints

- $2 \leq N \leq 10^{18}$
- $N$ is an integer.

## Input

The input is given from Standard Input in the following format:

> $N$

## Output

Print the probability, modulo $998244353$, that your integer ends up being $N$.

```input1
6
```

```output1
239578645
```

One of the possible procedures is as follows.

- Initially, your integer is $1$.
- You cast a die, and it shows $2$.  Your integer becomes $1 \times 2 = 2$.
- You cast a die, and it shows $4$.  Your integer becomes $2 \times 4 = 8$.
- Now your integer is not less than $6$, so you terminate the procedure.

Your integer ends up being $8$, which is not equal to $N = 6$.  

The probability that your integer ends up being $6$ is $\frac{7}{25}$.  Since $239578645 \times 25 \equiv 7 \pmod{998244353}$, print $239578645$.

```input2
7
```

```output2
0
```

No matter what the die shows, your integer never ends up being $7$.

```input3
300
```

```output3
183676961
```

```input4
979552051200000000
```

```output4
812376310
```