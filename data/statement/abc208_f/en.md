Score : $600$ points

## Problem Statement

For non-negative integers $n$ and $m$, let us define the function $f(n, m)$ as follows, using a positive integer $K$.

$\displaystyle f(n, m) = \begin{cases} 0 &amp; (n = 0) \\ n^K &amp; (n \gt 0, m = 0) \\ f(n-1, m) + f(n, m-1) &amp; (n \gt 0, m \gt 0) \end{cases}$

Given $N$, $M$, and $K$, find $f(N, M)$ modulo $(10 ^ 9 + 7)$.

## Constraints

- $0 \leq N \leq 10^{18}$
- $0 \leq M \leq 30$
- $1 \leq K \leq 2.5 \times 10^6$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $K$

## Output

Print $f(N, M)$ modulo $(10 ^ 9 + 7)$.

```input1
3 4 2
```

```output1
35
```

When $K = 2$, the values $f(n, m)$ for $n \leq 3, m \leq 4$ are as follows.

  
    
      
      $m = 0$
      $m = 1$
      $m = 2$
      $m = 3$
      $m = 4$
    
    
      $n = 0$
      $0$
      $0$
      $0$
      $0$
      $0$
    
    
      $n = 1$
      $1$
      $1$
      $1$
      $1$
      $1$
    
    
      $n = 2$
      $4$
      $5$
      $6$
      $7$
      $8$
    
    
      $n = 3$
      $9$
      $14$
      $20$
      $27$
      $35$
    
  

```input2
0 1 2
```

```output2
0
```

```input3
1000000000000000000 30 123456
```

```output3
297085514
```