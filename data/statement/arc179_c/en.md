Score : $500$ points

## Problem Statement

This is an **interactive problem** (where your program interacts with the judge via input and output).

You are given a positive integer $N$.

The judge has a hidden positive integer $R$ and $N$ integers $A_1, A_2, \dots, A_N$. It is guaranteed that $|A_i|\le R$ and $\left|\displaystyle\sum_{i=1}^{N}A_i\right| \le R$.

There is a blackboard on which you can write integers with absolute values not exceeding $R$. Initially, the blackboard is empty.

The judge has written the values $A_1, A_2, \dots, A_N$ on the blackboard **in this order**. Your task is to make the blackboard contain only one value $\displaystyle\sum_{i=1}^{N}A_i$.

You cannot learn the values of $R$ and $A_i$ directly, but you can interact with the judge up to $25000$ times.

For a positive integer $i$, let $X_i$ be the $i$-th integer written on the blackboard. Specifically, $X_i = A_i$ for $i=1,2,\dots,N$.

In one interaction, you can specify two distinct positive integers $i$ and $j$ and choose one of the following actions:

- Perform addition. The judge will erase $X_i$ and $X_j$ from the blackboard and write $X_i + X_j$ on the blackboard.-   - $|X_i + X_j| \leq R$ must hold.
- Perform comparison. The judge will tell you whether $X_i &lt; X_j$ is true or false.

Here, at the beginning of each interaction, the $i$-th and $j$-th integers written on the blackboard must not have been erased.

Perform the interactions appropriately so that after all interactions, the blackboard contains only one value $\displaystyle\sum_{i=1}^{N}A_i$.

The values of $R$ and $A_i$ are determined before the start of the conversation between your program and the judge.

## Constraints

- $2 \leq N \leq 1000$
- $1 \leq R \leq 10^9$
- $|A_i| \leq R$
- $\left|\displaystyle\sum_{i=1}^{N}A_i\right| \le R$
- $N$, $R$, and $A_i$ are integers.

## Input and Output

This is an **interactive problem** (where your program interacts with the judge via input and output).

First, read $N$ from Standard Input.

```plain
$N$
```

Next, repeat the interactions until the blackboard contains only one value $\displaystyle\sum_{i=1}^{N}A_i$.

When performing addition, make an output in the following format to Standard Output. Append a newline at the end. Here, $i$ and $j$ are distinct positive integers.

```plain
+ $i$ $j$
```

The response from the judge will be given from Standard Input in the following format:

```plain
$P$
```

Here, $P$ is an integer:

- If $P \geq N + 1$, it means that the value $X_i + X_j$ has been written on the blackboard, and it is the $P$-th integer written.
- If $P = -1$, it means that $i$ and $j$ do not satisfy the constraints, or the number of interactions has exceeded $25000$.

When performing comparison, make an output in the following format to Standard Output. Append a newline at the end. Here, $i$ and $j$ are distinct positive integers.

```plain
? $i$ $j$
```

The response from the judge will be given from Standard Input in the following format:

```plain
$Q$
```

Here, $Q$ is an integer:

- If $Q = 1$, it means that $X_i &lt; X_j$ is true.
- If $Q = 0$, it means that $X_i &lt; X_j$ is false.
- If $Q = -1$, it means that $i$ and $j$ do not satisfy the constraints, or the number of interactions has exceeded $25000$.

For both types of interactions, if the judge's response is $-1$, your program is already considered incorrect. In this case, terminate your program immediately.

When the blackboard contains only one value $\displaystyle\sum_{i=1}^{N}A_i$, report this to the judge in the following format. This does not count towards the number of interactions. Then, terminate your program immediately.

```plain
!
```

If you make an output in a format that does not match any of the above, `-1` will be given from Standard Input.

```plain
-1
```

In this case, your program is already considered incorrect. Terminate your program immediately.

## Notes

- **&lt;span style="color:red"&gt;For each output, append a newline at the end and flush Standard Output. Otherwise, the verdict may be TLE.&lt;/span&gt;**
- Terminate your program immediately after outputting the result (or receiving `-1`). Otherwise, the verdict will be indeterminate.
- Extra newlines will be considered as malformed output.

## Sample Input and Output

Here is a possible conversation with $N=3, R=10, A_1=-1, A_2=10, A_3=1$.

Input
Output
Explanation

`3`

First, the integer $N$ is given.

`? 1 2`
Perform a comparison.

`1`

The judge returns $1$ because $X_1\lt X_2\ (-1\lt 10)$.

`+ 1 3`
Perform an addition.

`4`

The judge erases $X_1 = -1$ and $X_3 = 1$ from the blackboard and writes $X_1 + X_3 = 0$. This is the fourth integer written.

`+ 2 4`
Perform an addition.

`5`

The judge erases $X_2 = 10$ and $X_4 = 0$ from the blackboard and writes $X_2 + X_4 = 10$. This is the fifth integer written.

`!`
The blackboard contains only one value $\displaystyle\sum_{i=1}^{N}A_i$, so report this to the judge.