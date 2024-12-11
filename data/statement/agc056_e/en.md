Score : $1600$ points

## Problem Statement

There is a circumference of length $N$.
On this circumference, a point whose distance from a certain fixed point, measured in the clockwise direction, is $x$ has the coordinate $x$.

For each integer $i$ ($0 \leq i \leq N-1$), there is a mouse at coordinate $i+0.5$.

Snuke will throw a piece of cheese $N-1$ times.
More specifically, he repeats the following $N-1$ times.

- Choose an integer $y$ ($0 \leq y \leq N-1$) randomly, where $y=i$ is chosen with probability $A_i$ percent. This choice is made independently each time.
- Then, throw cheese from the coordinate $y$. The cheese travels in the clockwise direction on the circumference. When the cheese meets a mouse, the following happens.-   - If the mouse has not eaten cheese:-   -   - It eats the cheese with probability $1/2$. The cheese disappears.
-   -   - It does nothing with probability $1/2$.
-   - If the mouse has already eaten cheese:-   -   - It does nothing.
- The cheese keeps traveling on the circumference until eaten by some mouse.

After $N-1$ throws of cheese, there will be exactly one mouse that has never eaten cheese.
For each $k=0,1,\cdots,N-1$, find the probability that the mouse at coordinate $k+0.5$ ends up not eating cheese, modulo $998244353$.

How to represent a probability modulo $998244353$

We can prove that each probability in question is always a rational number. Additionally, under the Constraints of this problem, when that number is represented as an irreducible fraction $\frac{P}{Q}$, we can also prove that $Q \neq 0 \pmod{998244353}$. Thus, there is a unique integer $R$ such that $R \times Q \equiv P \pmod{998244353}, 0 \leq R &lt; 998244353$. Answer with this $R$.

## Constraints

- $1 \leq N \leq 40$
- $0 \leq A_i$
- $\sum_{0 \leq i \leq N-1} A_i = 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_0$ $A_1$ $\cdots$ $A_{N-1}$

## Output

Print the answers for $k=0,1,\cdots,N-1$ in one line, with spaces in between.

```input1
2
0 100
```

```output1
665496236 332748118
```

$y=1$ is always chosen. When throwing cheese from this point, the following happens.

- With probability $1/2$, the mouse at coordinate $1.5$ eats it.
- With probability $1/4$, the mouse at coordinate $0.5$ eats it.
- With probability $1/8$, the mouse at coordinate $1.5$ eats it.
- With probability $1/16$, the mouse at coordinate $0.5$ eats it.
- $\vdots$

In the end, the mice at coordinates $0.5$ and $1.5$ eat this cheese with probabilities $1/3$ and $2/3$, respectively.

Therefore, they end up not eating cheese with probabilities $2/3$ and $1/3$, respectively.

```input2
2
50 50
```

```output2
499122177 499122177
```

```input3
10
1 2 3 4 5 6 7 8 9 55
```

```output3
333507001 91405664 419217284 757959653 974851434 806873643 112668439 378659755 979030842 137048051
```