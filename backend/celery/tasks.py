
@app.task(ignore_result=True)
def print_hello():
    print ('hello there')