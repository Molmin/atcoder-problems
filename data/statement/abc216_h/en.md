Score : $600$ points

## Problem Statement

There are $K$ robots on a number line. The $i$-th robot $(1 \leq i \leq K)$ is initially at the coordinate $x_i$.

The following procedure is going to take place exactly $N$ times.

- Each robot chooses to move or not with probability $\frac{1}{2}$ each. The robots that move will **simultaneously** go the distance of $1$ in the positive direction, and the other robots will remain still.

Here, all probabilistic decisions are independent.

Find the probability that no two robots meet, that is, there are never two or more robots at the same coordinate at the same time throughout the procedures, modulo $998244353$ (see Notes).

## Notes

It can be proved that the probability in question is always a rational number. Additionally, under the Constraints in this problem, when that value is represented as $\frac{P}{Q}$ using two coprime integers $P$ and $Q$, it can be proved that there uniquely exists an integer $R$ such that $R \times Q \equiv P\pmod{998244353}$ and $0 \leq R \lt 998244353$. Find this $R$.

## Constraints

- $2 \leq K \leq 10$
- $1 \leq N \leq 1000$
- $0 \leq x_1 \lt x_2 \lt \cdots \lt x_K \leq 1000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $K$ $N$
> 
> $x_1$ $x_2$ $\ldots$ $x_K$

## Output

Print the answer.

```input1
2 2
1 2
```

```output1
374341633
```

The probability in question is $\frac{5}{8}$.

We have $374341633 \times 8 \equiv 5\pmod{998244353}$, so you should print $374341633$.

```input2
2 2
10 100
```

```output2
1
```

The probability in question may be $1$.

```input3
10 832
73 160 221 340 447 574 720 742 782 970
```

```output3
553220346
```