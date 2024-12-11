Score : $600$ points

## Problem Statement

Given is an integer $N$. Snuke will choose integers $s_1$, $s_2$, $n_1$, $n_2$, $u_1$, $u_2$, $k_1$, $k_2$, $e_1$, and $e_2$ so that all of the following six conditions will be satisfied:

- $0 \leq s_1 &lt; s_2$
- $0 \leq n_1 &lt; n_2$
- $0 \leq u_1 &lt; u_2$
- $0 \leq k_1 &lt; k_2$
- $0 \leq e_1 &lt; e_2$
- $s_1 + s_2 + n_1 + n_2 + u_1 + u_2 + k_1 + k_2 + e_1 + e_2 \leq N$

For every possible choice $(s_1,s_2,n_1,n_2,u_1,u_2,k_1,k_2,e_1,e_2)$, compute $(s_2 - s_1)(n_2 - n_1)(u_2 - u_1)(k_2 - k_1)(e_2 - e_1)$, and find the sum of all computed values, modulo $(10^{9} +7)$.

Solve this problem for each of the $T$ test cases given.

## Constraints

- All values in input are integers.
- $1 \leq T \leq 100$
- $1 \leq N \leq 10^{9}$

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each case is given in the following format:

> $N$

## Output

Print $T$ lines. The $i$-th line should contain the answer to the $i$-th test case.

```input1
4
4
6
10
1000000000
```

```output1
0
11
4598
257255556
```

- When $N=4$, there is no possible choice $(s_1,s_2,n_1,n_2,u_1,u_2,k_1,k_2,e_1,e_2)$. Thus, the answer is $0$.
- When $N=6$, there are six possible choices $(s_1,s_2,n_1,n_2,u_1,u_2,k_1,k_2,e_1,e_2)$ as follows:-   - $(0,1,0,1,0,1,0,1,0,1)$
-   - $(0,2,0,1,0,1,0,1,0,1)$
-   - $(0,1,0,2,0,1,0,1,0,1)$
-   - $(0,1,0,1,0,2,0,1,0,1)$
-   - $(0,1,0,1,0,1,0,2,0,1)$
-   - $(0,1,0,1,0,1,0,1,0,2)$
- We have one choice where $(s_2 - s_1)(n_2 - n_1)(u_2 - u_1)(k_2 - k_1)(e_2 - e_1)$ is $1$ and five choices where $(s_2 - s_1)(n_2 - n_1)(u_2 - u_1)(k_2 - k_1)(e_2 - e_1)$ is $2$, so the answer is $11$.
- Be sure to find the sum modulo $(10^{9} +7)$.