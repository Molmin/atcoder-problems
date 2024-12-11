Score : $600$ points

## Problem Statement

Ringo is participating in an archery contest AtArcher.

In AtArcher, a participant shoots $N$ arrows at a target on a number line to compete for the total score. The center of the target is at coordinate $0$. Based on where the arrow hits, the score of the shot is defined as follows.

- For $i = 0, 1, \dots, M-1$, if the arrow hits a point whose distance from the center of the target is between $r_i$ and $r_{i+1}$, the score is $s_i$. If the distance is greater than $r_M$, the score is $0$. **If the arrow hits the boundary, the higher score is applied.**
- The closer to the center, the higher the score is. In other words, the following is satisfied.-   - $0 = r_0 \lt r_1 \lt \cdots \lt r_{M-1} \lt r_M$
-   - $s_0 \gt s_1 \gt \cdots \gt s_{M-1} \gt 0$

For example, the figure below shows the score for a shot when $r = (0, 2, 7, 9), s = (100, 70, 30)$.

![](https://img.atcoder.jp/arc131/9c119e12092c684d21feea8d7c1f0f76.png)

 

Additionally, AtArcher has one special rule: the distance between any two arrows must always be at least $D$. Violating this rule disqualifies the participant, making the total score $0$.

What is the maximum total score that Ringo can get from all the shots?

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq M \leq 10^5$
- $1 \leq D \leq 10^6$
- $0 = r_0 \lt r_1 \lt \cdots \lt r_{M-1} \lt r_M \leq 10^{11}$
- $10^{11} \geq s_0 \gt s_1 \gt \cdots \gt s_{M-1} \gt 0$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $D$
> 
> $r_0$ $r_1$ $\cdots$ $r_{M-1}$ $r_M$
> 
> $s_0$ $s_1$ $\cdots$ $s_{M-1}$

## Output

Print the answer.

```input1
3 3 3
0 2 7 9
100 70 30
```

```output1
270
```

This sample input corresponds to the case in the Problem Statement, with $D = 3$.

For example, if the $N = 3$ arrows hit the coordinates $-6, -2, 1$, they score $70, 100, 100$, respectively, for a total score of $270$, which is the maximum achievable.

![](https://img.atcoder.jp/arc131/3b9fbfbeaf90d953098e650d7b070e0d.png)

 

Note that you cannot hit the $100$-point area with all the arrows to score $300$, because the distance between any two arrows must be at least $D = 3$, or you will be disqualified and score $0$.

```input2
3 3 8
0 2 7 9
100 70 30
```

```output2
200
```

This sample input corresponds to the case in the Problem Statement, with $D = 8$.

For example, if the $N = 3$ arrows hit the coordinates $-7, 1, 9$, they score $70, 100, 30$, respectively, for a total score of $200$, which is the maximum achievable.

![](https://img.atcoder.jp/arc131/aefdd113cd212d29142783d0ffb1ea1e.png)

 

```input3
7 5 47
0 10 40 100 160 220
50 25 9 6 3
```

```output3
111
```

For example, if you shoot the arrows as shown in the following figure, you will score $111$ in total, which is the maximum.

![](https://img.atcoder.jp/arc131/2058c9b1e1deeea3bc6bae11da70b210.png)

 

```input4
100 1 5
0 7
100000000000
```

```output4
300000000000
```

You can shoot $N = 100$ arrows, but in order to avoid disqualification, at most $3$ arrows can hit the area with a positive score.

```input5
15 10 85
0 122 244 366 488 610 732 854 976 1098 1220
10 9 8 7 6 5 4 3 2 1
```

```output5
119
```