## Problem Statement

                    

![](https://img.atcoder.jp/ahc013/d82f46552bdf5f406aaba84ec8a57d9d.gif)

                    

                        Recruit Co. has a server room represented by a grid of $N$ rows and $N$ columns.<br>
                        Let $(i, j)$ denote the cell in row $i$ ($0 \leq i \lt N$) from the top and column $j$ ($0 \leq j \lt N$) from the left of the server room.<br>
                        Each cell can contain up to one computer.<br>
                        There are $K$ types of computers and $100$ computers of each type in the server room.<br>
                        In the beginning, $100 \times K$ computers are already placed in $100 \times K$ cells, and the remaining $N^2 - 100 \times K$ cells are empty.<br>
                    

                    

                        X-san can **move** computers around first, and then **connect** them with straight cables.<br>
                        **Move** and **Connect** is defined as follows:
                        

- **Move** : Select one of the computers and move it to one of the adjacent cells, up, down, left, or right. You can move a computer multiple times. All of the following requirements should be met for each movement:
                                -   - You cannot move a computer to a cell where another computer is already located.
-   - You cannot move a computer outside the grid.
- **Connect** : Select two computers and connect them to each other with a straight cable. All of the following requirements should be met for each connection:
                                -   - The two computers you choose must be on the same row or in the same column, with no other computers in between.
-   - The cables do not intersect with any other cables. (Connecting multiple cables in one computer is allowed.)
-   - You cannot connect the same pair of computers twice.
-   - The two computers you choose must be different (one cannot connect a computer to itself with a single cable).

                    

                    

                        **Clusters** are created by connecting computers.<br>
                        Computers $C_i$ and $C_j$ are considered to be "in the same cluster" if and only if computer $C_j$ can be reached from computer $C_i$ by a path over computers connected with cables.
                    

                    

                        X-san wants to create good **clusters** and increase the **processing performance of the server room** as much as possible.<br>
                        The more pairs of computers of the same type in a **cluster**, the better the **processing performance of the server room**.<br>
                        On the other hand, the more pairs of computers of different types there are in the **cluster**, the lower the **processing performance of the server room**.
                    

                    

                        The **processing performance of a server room** is calculated as follows:
                        

- Denote the $100 \times K$ computers in the server room as $C_0, C_1, \cdots, C_{100K-1}$
- The **processing performance of the server room** is the sum of the following points summed over every integer pair $(i, j)$ satisfying $0 \leq i \lt j \lt 100 \times K$:
                                -   - $1$ point if $C_i$ and $C_j$ belong to the same **cluster** and have the same type
-   - $-1$ point if $C_i$ and $C_j$ belong to the same **cluster** and are of different types
-   - $0$ points if $C_i$ and $C_j$ do not belong to the same **cluster**

                    

                    

                        Considering the physical burden of X-san, the number of **move**s and the number of **connection**s must be less than or equal to $100 \times K$ in total.<br>
                        Your challenge is to find a way to maximize the **processing performance of the server room** under all the restrictions we’ve placed above.
                    

                
            
            
                
                    

## Scoring

                    

                        In each test case, if the **processing performance of the server room** is greater than $0$ points, it will be the score of the case; otherwise, the test case will be scored $0$ points. 
                    

                    

                        The score of a submission is the total scores for each test case.
                        In the provisional test, if your submission produces illegal output or exceeds the time limit for some test cases, the submission itself will be judged as WA or TLE , and the score of the submission will be zero.
                        In the system test, if your submission produces illegal output or exceeds the time limit for some test cases, only the score for those test cases will be zero.
                    

                    

### Number of test cases

                    

- Provisional test: 50
                            -   - In provisional testing, $N$ and $K$ that satisfy the input constraints are randomly selected.
- System test: 2000
                            -   - For the system test, there will be 20 data inputs for each $N$ and $K$ pair (100 pairs in total).
-   - We will publish [seeds.txt](https://img.atcoder.jp/ahc013/seeds.txt) (sha256=`0a50dccf4689292f69a36be0ea1a99767de055434b854f2b0bc7f1fd40f9033e`) after the contest is over.

                    

### About execution time

                    

                        Execution time may vary slightly from run to run.
                        In addition, since system tests simultaneously perform a large number of executions, it has been observed that execution time increases by several percents compared to provisional tests.
                        For these reasons, submissions that are very close to the time limit may result in TLE in the system test.
                        Please measure the execution time in your program to terminate the process, or make sure to have enough time margin for the execution.
                    

                
            
            

            
                
                    
                        

## Input

                        

Input is given from standard input (stdin) in the following format:

> \(\begin{array}{lll}
> 
>     N ~ K & & \\
> 
>     c_{ 0,0 } & \ldots & c_{ 0,N-1 } \\
> 
>     \vdots & \ddots & \vdots \\
> 
>     c_{ N-1,0 } & \ldots & c_{ N-1,N-1 }
> 
>   \end{array}\)
                        

                            The first line contains two integers $N$ and $K$. Each of the following $N$ lines is given one string of length $N$.
                            

- $N$ and $K$ are integers representing the size of the server room and the number of computer types, satisfying one of the following
                                    -   - $K=2$  and  $15 \leq N \leq 39$
-   - $K=3$  and  $18 \leq N \leq 42$
-   - $K=4$  and  $21 \leq N \leq 45$
-   - $K=5$  and  $24 \leq N \leq 48$
- $c_{ i,j }$ is an integer representing the initial state of the $i$-th cell from the top and $j$-th cell from the left in the server room. $0 \leq c_{i,j} \leq K$.
                                    -   - $c_{i,j} = 0$ means that no computer is placed in the cell $(i, j)$. There are always $N^2 - 100 \times K$ cells without a computer.
-   - if $1 \leq c_{ i,j } \leq K$, it means the computer of type $c_{i,j}$ is placed in the cell $(i,j)$. It is guaranteed that $100$ computers of each type are placed in the grid.

                        

                    
                

                
                    
                        

## Output

                        

Please output to standard output (stdout) in the following format:

> \(
> 
> X \\
> 
> a_0 ~ b_0 ~ c_0 ~ d_0 \\
> 
> \vdots \\
> 
> a_{X-1} ~ b_{X-1} ~ c_{X-1} ~ d_{X-1} \\
> 
> Y \\
> 
> e_0 ~ f_0 ~ g_0 ~ h_0 \\
> 
> \vdots \\
> 
> e_{Y-1} ~ f_{Y-1} ~ g_{Y-1} ~ h_{Y-1}
> 
> \)

                        

                            On the first line, output an integer $X$ representing the number of **move**s to be made.<br>
                            On the following $X$ lines, output four integers representing the information on the **move**s in the order in which they are to be made.<br>
                            The integers $a_i, b_i, c_i, d_i$ on line $i$ represent **moving** the computer located at $(a_i, b_i)$ to $(c_i, d_i)$
                        

                        

                            Then output an integer $Y$ representing the number of **connection**s to be made.<br>
                            On the following $Y$ lines, output four integers representing the information of the **connection**.<br>
                            The integers $e_i, f_i, g_i, h_i$ on line $i$ represent the **connection** between the computer located at $(e_i, f_i)$ and the computer located at $(g_i, h_i)$.
                        

                        

                            In addition, all of the following constraints must be satisfied, or the submission will be judged as a WA.
                            

- $0 \leq X, \sim 0 \leq Y$
- $X + Y \leq 100 \times K$
- The **move**s and the **connection**s must satisfy the conditions written in the problem statement

                        

                        

                            If you output more than one solution, only the <font color="red">**first**</font> one is used for scoring. You can compare solutions by using the web visualizer.
                        

                    
                

                
                    
                        

## Input Generation

                        

                            Each case is generated by a test case generator.<br>
                            The test case generator is provided at the link at the bottom of the page.<br>
                            The test case generator generates cases in the following steps. For details, see the exact implementation (you are not required to read it through, however).<br>
                            

- $K$ is generated by the $\mathit{seed} \mod 4 + 2$. By adjusting the seed value, an input with a specific $K$ value can be generated.
- $N$ is generated uniformly at random from among those satisfying the input conditions.
- $c_{i,j}$ is generated uniformly at random from among those satisfying the input conditions.

                        

                    
                

                
                    
                        

## Tools

                        

- [Input generator and visualizer (Web version)](https://img.atcoder.jp/ahc013/a42302b3af.html?lang=en): This can display animations.
- [Input generator and visualizer (Local version)](https://img.atcoder.jp/ahc013/a42302b3af.zip): You need a compilation environment of [Rust language](https://www.rust-lang.org/).
- [Sample solution (C++, Python)](https://img.atcoder.jp/ahc013/4c1bf2fcb4366d2f8b77ed1f53aeaf16.zip): They implement the following:
                                -   1. Make several random **move**s
-   2. From each computer, **connect** to right and/or bottom if it can reach a computer of the same type
-   3. Calculate the score and output it to stderr

                        

                            <font color="red">**Sharing visualization results is not allowed until the end of the contest. **</font>
                        

                    
                
            

            
            
                
                    

## Sample Input 1 <span class="btn btn-default btn-sm btn-copy" tabindex="0" data-toggle="tooltip" data-trigger="manual" title="" data-target="pre-sample10" data-original-title="Copied!">Copy</span>

                    Copy
```plain
5 2
10000
00000
00200
00000
00111
```
                    Note that this input is for explanatory purposes only and does not meet the constraints of the input.
                
            

            
                
                    

## Sample Output 1 <span class="btn btn-default btn-sm btn-copy" tabindex="0" data-toggle="tooltip" data-trigger="manual" title="" data-target="pre-sample11" data-original-title="Copied!">Copy</span>

                    Copy
```plain
2
0 0 0 1
0 1 0 2
4
0 2 2 2
2 2 4 2
4 2 4 3
4 3 4 4
```
                    

- Move the computer at $(0, 0)$ to $(0, 2)$ by moving twice.
- Connect all computers.
- The **processing performance of the server room** at this time is 2.
                            -   - There is one **cluster** consisting of all computers, 4 computers of type 1 and 1 computer of type 2.
-   - The pairs of type 1 computers in the **cluster** are ${4 \choose 2} = 6$, and there are $4 \times 1 = 4$ pairs of computers between type 1 and type 2 in the **cluster**, so the **processing performance of the server room** is $6 - 4 = 2$.

                
            

            
                
                    

## Sample Input 2 <span class="btn btn-default btn-sm btn-copy" tabindex="0" data-toggle="tooltip" data-trigger="manual" title="" data-target="pre-sample12" data-original-title="Copied!">Copy</span>

                    Copy
```plain
33 3
200000020020030300300012000000200
000000000333000000002200002030201
000100010000003200020000031001010
000023200000000000202300010000030
000010000023000300310300003000010
100010030001000032100000000103000
000000030100030300000000002000000
100000000120200000000000001001000
120030000200000000001001032000302
000000020003033020000013020002301
030000301300000000020200002003000
002000000020000000030103002000100
331210020020020000200200200103000
000202320000003000000000001000000
000010010030000303120001200000001
103000022010000313000000000000003
000012000010000001000000030000030
002000200003010100000002332000000
000003023000230020000003030000130
010000020001202302210002102030000
000003000000100002002000002002000
010003000200200000010030103000212
001000300000300000130020000003120
000000320300200100300000030002200
000000100003000000020100000300000
010000130110030200200100000110000
000231100000113000102000201003010
000000100030100230000000021000030
300103010000010100100300001022000
201021000001001000020000002000333
000002030300000000030000103100300
020000110320030200012100001030300
000100000010000000020001220030021
```
                    This case is generated by running the test case generator with seed=`1`. Output examples are omitted.