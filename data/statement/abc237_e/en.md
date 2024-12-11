Score : $500$ points

## Problem Statement

AtCoder Ski Area has $N$ open spaces called Space $1$, Space $2$, $\ldots$, Space $N$. The altitude of Space $i$ is $H_i$.
There are $M$ slopes that connect two spaces bidirectionally. The $i$-th slope $(1 \leq i \leq M)$ connects Space $U_i$ and Space $V_i$. It is possible to travel between any two spaces using some slopes.

Takahashi can only travel between spaces by using slopes. Each time he goes through a slope, his **happiness** changes. Specifically, when he goes from Space $X$ to Space $Y$ by using the slope that directly connects them, his happiness changes as follows.

- If the altitude of Space $X$ is strictly higher than that of Space $Y$, the happiness **increases** by their difference: $H_X-H_Y$.
- If the altitude of Space $X$ is strictly lower than that of Space $Y$, the happiness **decreases** by their difference multiplied by $2$: $2(H_Y-H_X)$.
- If the altitude of Space $X$ is equal to that of Space $Y$, the happiness does not change.

The happiness may be a negative value.

Initially, Takahashi is in Space $1$, and his happiness is $0$. Find his maximum possible happiness after going through any number of slopes (possibly zero), ending in any space.

## Constraints

- $2 \leq N \leq 2\times 10^5$
- $N-1 \leq M \leq \min( 2\times 10^5,\frac{N(N-1)}{2})$
- $0 \leq H_i\leq 10^8$ $(1 \leq i \leq N)$
- $1 \leq U_i &lt; V_i \leq N$ $(1 \leq i \leq M)$
- $(U_i,V_i) \neq (U_j, V_j)$ if $i \neq j$.
- All values in input are integers.
- It is possible to travel between any two spaces using some slopes.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $H_1$ $H_2$ $\ldots$ $H_N$
> 
> $U_1$ $V_1$
> 
> $U_2$ $V_2$
> 
> $\vdots$
> 
> $U_M$ $V_M$

## Output

Print the answer.

```input1
4 4
10 8 12 5
1 2
1 3
2 3
3 4
```

```output1
3
```

If Takahashi takes the route Space $1$ $\to$ Space $3$ $\to$ Space $4$, his happiness changes as follows.

- When going from Space $1$ (altitude $10$) to Space $3$ (altitude $12$), it decreases by $2\times (12-10)=4$ and becomes $0-4=-4$.
- When going from Space $3$ (altitude $12$) to Space $4$ (altitude $5$), it increases by $12-5=7$ and becomes $-4+7=3$.

If he ends the travel here, the final happiness will be $3$, which is the maximum possible value.

```input2
2 1
0 10
1 2
```

```output2
0
```

His happiness is maximized by not moving at all.