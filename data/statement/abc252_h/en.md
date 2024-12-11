Score : $600$ points

## Problem Statement

We have $N$ gemstones. The color and beauty of the $i$-th gemstone are $D_i$ and $V_i$, respectively.<br>
Here, the color of each gemstone is one of $1, 2, \ldots, C$, and there is at least one gemstone of each color.

Out of the $N$ gemstones, we will choose $C$ with distinct colors and use them to make a necklace. (The order does not matter.)
The beautifulness of the necklace will be the bitwise $\rm XOR$ of the chosen gemstones.

Among all possible ways to make a necklace, find the beautifulness of the necklace made in the way with the $K$-th greatest beautifulness. (If there are multiple ways with the same beautifulness, we count all of them.)

What is bitwise $\rm XOR$?

The bitwise $\rm XOR$ of integers $A$ and $B$, $A \oplus B$, is defined as follows:

- When $A \oplus B$ is written in base two, the digit in the $2^k$'s place ($k \geq 0$) is $1$ if either $A$ or $B$, but not both, has $1$ in the $2^k$'s place, and $0$ otherwise.

For example, $3 \oplus 5 = 6$. (In base two: $011 \oplus 101 = 110$.)

## Constraints

- $1 \leq C \leq N \leq 70$
- $1 \leq D_i \leq C$
- $0 \leq V_i &lt; 2^{60}$
- $1 \leq K \leq 10^{18}$
- There are at least $K$ ways to make a necklace.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $C$ $K$
> 
> $D_1$ $V_1$
> 
> $\vdots$
> 
> $D_N$ $V_N$

## Output

Print the answer.

```input1
4 2 3
2 4
2 6
1 2
1 3
```

```output1
5
```

There are four ways to make a necklace, as follows.

- Choose the $1$-st and $3$-rd gemstones to make a necklace with the beautifulness of $4\ {\rm XOR}\ 2 =6$.
- Choose the $1$-st and $4$-th gemstones to make a necklace with the beautifulness of $4\ {\rm XOR}\ 3 =7$.
- Choose the $2$-nd and $3$-rd gemstones to make a necklace with the beautifulness of $6\ {\rm XOR}\ 2 =4$.
- Choose the $2$-nd and $4$-th gemstones to make a necklace with the beautifulness of $6\ {\rm XOR}\ 3 =5$.

Thus, the necklace with the $3$-rd greatest beautifulness has the beautifulness of $5$.

```input2
3 1 2
1 0
1 0
1 0
```

```output2
0
```

There are three ways to make a necklace, all of which result in the beautifulness of $0$.

```input3
10 3 11
1 414213562373095048
1 732050807568877293
2 236067977499789696
2 449489742783178098
2 645751311064590590
2 828427124746190097
3 162277660168379331
3 316624790355399849
3 464101615137754587
3 605551275463989293
```

```output3
766842905529259824
```