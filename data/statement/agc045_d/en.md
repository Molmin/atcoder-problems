Score : $1200$ points

## Problem Statement

We have $N$ lamps numbered $1$ to $N$, and $N$ buttons numbered $1$ to $N$.
Initially, Lamp $1, 2, \cdots, A$ are on, and the other lamps are off.

Snuke and Ringo will play the following game.

- <p>First, Ringo generates a permutation $(p_1,p_2,\cdots,p_N)$ of  $(1,2,\cdots,N)$.
The permutation is chosen from all $N!$ possible permutations with equal probability, without being informed to Snuke.</p>
- <p>Then, Snuke does the following operation any number of times he likes:</p>
-   - Choose a lamp that is on at the moment. (The operation cannot be done if there is no such lamp.)
Let Lamp $i$ be the chosen lamp.
Press Button $i$, which switches the state of Lamp $p_i$. That is, Lamp $p_i$ will be turned off if it is on, and vice versa.

At every moment, Snuke knows which lamps are on.
Snuke wins if all the lamps are on, and he will surrender when it turns out that he cannot win.
What is the probability of winning when Snuke plays optimally?

Let $w$ be the probability of winning. Then, $w \times N!$ will be an integer.
Compute $w \times N!$ modulo $(10^9+7)$.

## Constraints

- $2 \leq N \leq 10^7$
- $1 \leq A \leq \min(N-1,5000)$

## Input

Input is given from Standard Input in the following format:

> $N$ $A$

## Output

Print $w \times N!$ modulo $(10^9+7)$, where $w$ is the probability of Snuke's winning.

```input1
3 1
```

```output1
2
```

First, Snuke will press Button $1$.
If Lamp $1$ turns off, he loses.
Otherwise, he will press the button that he can now press.
If the remaining lamp turns on, he wins; if Lamp $1$ turns off, he loses.
The probability of winning in this game is $1/3$, so we should print $(1/3)\times 3!=2$.

```input2
3 2
```

```output2
3
```

```input3
8 4
```

```output3
16776
```

```input4
9999999 4999
```

```output4
90395416
```