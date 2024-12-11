Score : $500$ points

## Problem Statement

This is an **interactive problem** (where your program interacts with the judge via input and output).

You are given a positive integer $N$ and integers $L$ and $R$ such that $0 \leq L \leq R &lt; 2^N$. The judge has a hidden sequence $A = (A_0, A_1, \dots, A_{2^N-1})$ consisting of integers between $0$ and $99$, inclusive.

Your goal is to find the remainder when $A_L + A_{L+1} + \dots + A_R$ is divided by $100$. However, you cannot directly know the values of the elements in the sequence $A$. Instead, you can ask the judge the following question:

- Choose non-negative integers $i$ and $j$ such that $2^i(j+1) \leq 2^N$. Let $l = 2^i j$ and $r = 2^i (j+1) - 1$. Ask for the remainder when $A_l + A_{l+1} + \dots + A_r$ is divided by $100$.

Let $m$ be the minimum number of questions required to determine the remainder when $A_L + A_{L+1} + \dots + A_R$ is divided by $100$ for any sequence $A$. You need to find this remainder within $m$ questions.

## Constraints

- $1 \leq N \leq 18$
- $0 \leq L \leq R \leq 2^N - 1$
- All input values are integers.

## Input and Output

This is an interactive problem (where your program interacts with the judge via input and output).

First, read the integers $N$, $L$, and $R$ from Standard Input:

```plain
$N$ $L$ $R$
```

Then, repeat asking questions until you can determine the remainder when $A_L + A_{L+1} + \dots + A_R$ is divided by $100$. Each question should be printed in the following format:

```plain
$?$ $i$ $j$
```

Here, $i$ and $j$ must satisfy the following constraints:

- $i$ and $j$ are non-negative integers.
- $2^i(j+1) \leq 2^N$

The response to the question will be given in the following format from Standard Input:

```plain
$T$
```

Here, $T$ is the answer to the question, which is the remainder when $A_l + A_{l+1} + \dots + A_r$ is divided by $100$, where $l = 2^i j$ and $r = 2^i (j+1) - 1$.

If $i$ and $j$ do not satisfy the constraints, or if the number of questions exceeds $m$, then $T$ will be `-1`.

If the judge returns `-1`, your program is already considered incorrect. In this case, terminate the program immediately.

Once you have determined the remainder when $A_L + A_{L+1} + \dots + A_R$ is divided by $100$, print the remainder $S$ in the following format and terminate the program immediately:

```plain
$!$ $S$
```

## Notes

- **&lt;span style="color:red"&gt;At the end of each output, print a newline and flush Standard Output. Otherwise, the verdict may be TLE.&lt;/span&gt;**
- **If your output is malformed or your program exits prematurely, the verdict will be indeterminate.**
- After printing the answer, terminate the program immediately. Otherwise, the verdict will be indeterminate.

## Example

Here is an example for $N=3$, $L=1$, $R=5$, and $A=(31, 41, 59, 26, 53, 58, 97, 93)$. In this case, $m=3$, so you can ask up to three questions.

  Input Output Description   
 
 `3 1 5`  First, the integers $N$, $L$, and $R$ are given.  
  `? 0 1` Ask the question with $(i, j) = (0, 1)$.  
 `41`  $l=1$ and $r=1$, so the response is the remainder when $A_1=41$ is divided by $100$, which is $41$. The judge returns this value.  
  `? 1 1` Ask the question with $(i, j) = (1, 1)$.  
 `85`  $l=2$ and $r=3$, so the response is the remainder when $A_2 + A_3 = 85$ is divided by $100$, which is $85$. The judge returns this value.  
  `? 1 2` Ask the question with $(i, j) = (1, 2)$.  
 `11`  $l=4$ and $r=5$, so the response is the remainder when $A_4 + A_5 = 111$ is divided by $100$, which is $11$. The judge returns this value.  
  `! 37` The answer is $37$, so print this value.