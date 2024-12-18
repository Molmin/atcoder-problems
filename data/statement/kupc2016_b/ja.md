配点 : $100$ 点

        
            

                

## 問題文

                
                    

                        京都大学プログラミングコンテストは、京都大学の学生が有志で主催するプログラミングコンテストです。
                        **K**yoto **U**niversity **P**rogramming **C**ontest の略で KUPC などと呼ばれています。
                    

                    

                        引用元：[*京都大学プログラミングコンテスト ご案内*](http://www.kupc.jp/index.html)
                    

                
                

                    今年もKUPCを開催するために作問委員会が開かれ、そこで $N$ 問の問題が提案された。
                    それぞれの問題は順に $1$ から $N$ まで番号付けられており、 $i$ 番目の問題の名前は $P_i$ である。
                    ただ、提案された問題数が多すぎたため、KUPCを複数回に分けて出題することにした。
                

                

                    そこで、以下の条件を満たすように問題を選んで、KUPCを複数回に分けることとした。
                    

- 1回のKUPCでは $K$ 問の問題を出題する。
- 各問題が出題される回数は、開催される全てのKUPCを通して高々1回である。
- 1回のKUPCに出題する $K$ 問の問題の名前の頭文字が全て異なるように出題する。

                

                

                    作問委員の1人であるあなたは、KUPCが開催される回数をできるだけ多くしたいと考えた。
                    最大で何回のKUPCを開催することができるかを求めよ。
                

            
        

        
            
                

## 制約

                

- $1 \leq N \leq 10^4$
- $1 \leq K \leq 26$
- $1 \leq |P_i| \leq 10$
- 各 $P_i$ に含まれる文字の種類は半角アルファベット大文字のみ

                

                    ただし、全ての問題 $i$, $j$ $(1 \leq i &lt; j \leq N)$ に対して $P_i \neq P_j$ となるとは限らない。
                

            
        
        

        
            
                
                    

## 入力

                    

入力は以下の形式で標準入力から与えられる。

> $N$ $K$
> 
> $P_1$
> 
> :
> 
> $P_N$
                
            

            
                

                    

## 出力

                    

                        KUPCを最大で何回開催することができるかを1行で出力せよ。
                    

                
            
        
        

        
            
                

## 入力例1

```plain
9 3
APPLE
ANT
ATCODER
BLOCK
BULL
BOSS
CAT
DOG
EGG
```
                

例えば、以下のように問題を選べば、 $3$ 回KUPCを開催できる。

                

- $1$ 回目: `APPLE`, `BLOCK`, `CAT`
- $2$ 回目: `ANT`, `BULL`, `DOG`
- $3$ 回目: `ATCODER`, `BOSS`, `EGG`

            
        

        
            
                

## 出力例1

```plain
3
```
            
        

        
            
                

## 入力例2

```plain
3 2
KU
KYOUDAI
KYOTOUNIV
```
            
        

        
            
                

## 出力例2

```plain
0
```
                

一度もKUPCを開催できない。