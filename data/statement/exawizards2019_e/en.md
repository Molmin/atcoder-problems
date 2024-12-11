Score : $700$ points

## Problem Statement

Today, Snuke will eat $B$ pieces of black chocolate and $W$ pieces of white chocolate for an afternoon snack.

He will repeat the following procedure until there is no piece left:

- Choose black or white with equal probability, and eat a piece of that color if it exists.

For each integer $i$ from $1$ to $B+W$ (inclusive), find the probability that the color of the $i$-th piece to be eaten is black.
It can be shown that these probabilities are rational, and we ask you to print them modulo $10^9 + 7$, as described in Notes.

## Notes

When you print a rational number, first write it as a fraction $\frac{y}{x}$, where $x, y$ are integers and $x$ is not divisible by $10^9 + 7$
(under the constraints of the problem, such representation is always possible).
Then, you need to print the only integer $z$ between $0$ and $10^9 + 6$, inclusive, that satisfies $xz \equiv y \pmod{10^9 + 7}$.

## Constraints

- All values in input are integers.
- $1 \leq B,W \leq 10^{5}$

## Input

Input is given from Standard Input in the following format:

> $B$ $W$

## Output

Print the answers in $B+W$ lines. In the $i$-th line, print the probability that the color of the $i$-th piece to be eaten is black, modulo $10^{9}+7$.

```input1
2 1
```

```output1
500000004
750000006
750000006
```

- There are three possible orders in which Snuke eats the pieces:-   - white, black, black
-   - black, white, black
-   - black, black, white
- with probabilities $\frac{1}{2}, \frac{1}{4}, \frac{1}{4}$, respectively. Thus, the probabilities of eating a black piece first, second and third are $\frac{1}{2},\frac{3}{4}$ and $\frac{3}{4}$, respectively.

```input2
3 2
```

```output2
500000004
500000004
625000005
187500002
187500002
```

- They are $\frac{1}{2},\frac{1}{2},\frac{5}{8},\frac{11}{16}$ and $\frac{11}{16}$, respectively.

```input3
6 9
```

```output3
500000004
500000004
500000004
500000004
500000004
500000004
929687507
218750002
224609377
303710940
633300786
694091802
172485353
411682132
411682132
```