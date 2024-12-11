Score : $400$ points

## Problem Statement

Given is a positive integer $N$. Consider repeatedly applying the operation below on $N$:

- First, choose a positive integer $z$ satisfying all of the conditions below:-   - $z$ can be represented as $z=p^e$, where $p$ is a prime number and $e$ is a positive integer;
-   - $z$ divides $N$;
-   - $z$ is different from all integers chosen in previous operations.
- Then, replace $N$ with $N/z$.

Find the maximum number of times the operation can be applied.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 10^{12}$

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

Print the maximum number of times the operation can be applied.

```input1
24
```

```output1
3
```

We can apply the operation three times by, for example, making the following choices:

- Choose $z=2 (=2^1)$. (Now we have $N=12$.)
- Choose $z=3 (=3^1)$. (Now we have $N=4$.)
- Choose $z=4 (=2^2)$. (Now we have $N=1$.)

```input2
1
```

```output2
0
```

We cannot apply the operation at all.

```input3
64
```

```output3
3
```

We can apply the operation three times by, for example, making the following choices:

- Choose $z=2 (=2^1)$. (Now we have $N=32$.)
- Choose $z=4 (=2^2)$. (Now we have $N=8$.)
- Choose $z=8 (=2^3)$. (Now we have $N=1$.)

```input4
1000000007
```

```output4
1
```

We can apply the operation once by, for example, making the following choice:

- $z=1000000007 (=1000000007^1)$. (Now we have $N=1$.)

```input5
997764507000
```

```output5
7
```