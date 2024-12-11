Score : $300$ points

## Problem Statement

Snuke bought a bridge of length $L$.
He decided to cover this bridge with blue tarps of length $W$ each.

Below, a position on the bridge is represented by the distance from the left end of the bridge.
When a tarp is placed so that its left end is at the position $x$ ($0 \leq x \leq L-W$, $x$ is real), it covers the range $[x, x+W]$. (Note that both ends are included.)

He has already placed $N$ tarps.
The left end of the $i$-th tarp is at the position $a_i$.

At least how many more tarps are needed to cover the bridge entirely?
Here, the bridge is said to be covered entirely when, for any real number $x$ between $0$ and $L$ (inclusive), there is a tarp that covers the position $x$.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 10^{5}$
- $1 \leq W \leq L \leq 10^{18}$
- $0 \leq a_1 &lt; a_2 &lt; \cdots &lt; a_N \leq L-W$

## Input

Input is given from Standard Input in the following format:

> $N$ $L$ $W$
> 
> $a_1$ $\cdots$ $a_N$

## Output

Print the minimum number of tarps needed to cover the bridge entirely.

```input1
2 10 3
3 5
```

```output1
2
```

- The bridge will be covered entirely by, for example, placing two tarps so that their left ends are at the positions $0$ and $7$.

```input2
5 10 3
0 1 4 6 7
```

```output2
0
```

```input3
12 1000000000 5
18501490 45193578 51176297 126259763 132941437 180230259 401450156 585843095 614520250 622477699 657221699 896711402
```

```output3
199999992
```